import type { TFetchRedirectsResponse } from '@okam/directus-node/edge'
import type { TDirectusRouteRedirectsModule } from '../../types/directusRouteConfig'
import { z } from 'zod'
import { log } from '../../logger'
import { getApiRouteUrlDefault, getRedirectSecretDefault } from '../env'

const defaultApiRoute = '/api/redirect'
const timeoutSchema = z.number().int().positive().max(2147483647).optional()
const redirectSchema = z.object({
  source: z.string(),
  destination: z.string(),
  permanent: z.boolean().nullish().transform(value => value ?? undefined),
  locale: z.boolean().nullish().transform(value => value ?? undefined),
})
const responseSchema = z.object({
  redirects: z.array(redirectSchema),
  rewrites: z.array(redirectSchema),
})

/** Combines abort signals; falls back to manual wiring where `AbortSignal.any` is missing (Next edge runtime). */
export function anySignal(signals: AbortSignal[]): AbortSignal {
  if (typeof AbortSignal.any === 'function')
    return AbortSignal.any(signals)
  const controller = new AbortController()
  const onAbort = (source: AbortSignal) => () => controller.abort(source.reason)
  for (const source of signals) {
    if (source.aborted) {
      controller.abort(source.reason)
      break
    }
    source.addEventListener('abort', onAbort(source), { once: true, signal: controller.signal })
  }
  return controller.signal
}

/** Gets redirect data without retaining a failed lookup; the optional deadline covers its body too. */
export async function getRedirectsRoute({
  apiRoute = defaultApiRoute,
  getApiRouteUrl = getApiRouteUrlDefault,
  getRedirectSecret = getRedirectSecretDefault,
  timeoutMs,
  signal: callerSignal,
}: TDirectusRouteRedirectsModule = {}): Promise<TFetchRedirectsResponse> {
  const deadline = new AbortController()
  const signal = callerSignal !== undefined ? anySignal([deadline.signal, callerSignal]) : deadline.signal
  let timer: ReturnType<typeof setTimeout> | undefined
  let reader: ReadableStreamDefaultReader<Uint8Array> | undefined
  let onAbort = () => {}
  const aborted = new Promise<never>((_resolve, reject) => {
    onAbort = () => {
      reader?.cancel(signal.reason).catch(() => {})
      reject(signal.reason)
    }
    signal.addEventListener('abort', onAbort, { once: true })
  })
  try {
    signal.throwIfAborted()
    const timeout = timeoutSchema.parse(timeoutMs)
    if (timeout !== undefined) {
      timer = setTimeout(() => deadline.abort(new DOMException('Redirect lookup timed out', 'TimeoutError')), timeout)
    }
    return await Promise.race([
      (async () => {
        const url = new URL(apiRoute, getApiRouteUrl())
        url.searchParams.set('secret', encodeURIComponent(getRedirectSecret()))
        const response = await fetch(url, { signal })
        signal.throwIfAborted()
        if (!response.ok) {
          response.body?.cancel().catch(() => {})
          log(`${apiRoute} not ok. Returned`, { status: response.status }, 'error')
          return { redirects: [], rewrites: [] }
        }
        reader = response.body?.getReader()
        const decoder = new TextDecoder()
        let text = ''
        const readBody = async (): Promise<void> => {
          const chunk = await reader?.read()
          signal.throwIfAborted()
          if (chunk === undefined || chunk.done)
            return
          text += decoder.decode(chunk.value, { stream: true })
          await readBody()
        }
        await readBody()
        return responseSchema.parse(JSON.parse(text + decoder.decode()))
      })(),
      aborted,
    ])
  }
  catch (error) {
    log(`Error fetching redirects from ${apiRoute}.`, { error }, 'error')
    return { redirects: [], rewrites: [] }
  }
  finally {
    clearTimeout(timer)
    signal.removeEventListener('abort', onAbort)
    reader?.releaseLock()
  }
}
