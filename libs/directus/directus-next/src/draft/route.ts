/* route handler enabling draft mode
 * visiting /api/draft will set a cookie name __prerender_bypass
 * Query Parameters
 * @var {string} secret Shared secret between backend and frontend, see NEXT_API_DRAFT_SECRET
 * @var {string[]} languages List of languages ['en-CA', 'fr-CA']
 * @var {string} type Type of the draft mode, 'path' or 'route'
 * @var {string[]} urls  List of urls ['/page', '/fr/page']. Required if type is 'path'.
 * @var {string[]} routes List of route templated rules (not used), {variable} are fetched inside the query string. Required if type is 'route'.
 * @var {string} version Collection Item Version (if empty, graphql use the main version)
 * @var {string} pk User graphql key (not used)
 * @return Response
 *   - 200 and { isEnabled: boolean } if you did not pass valid type/routes/urls/languages arguments
 *   - 401 for an invalid secret
 *   - 400 for any invalid argument
 *   - 307 for a valid redirect
 */

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { template } from 'radashi'
import * as zod from 'zod'
import { getJsonErrorResponse } from '../response'
import { getDraftSecretDefault } from './env'

const jsonStringsArraySchema = (message: string, code: number) =>
  zod
    .string()
    .transform((val, ctx) => {
      try {
        // Need to decode twice to handle nested URI components
        const decodedVal = decodeURIComponent(decodeURIComponent(val))
        return JSON.parse(decodedVal)
      } catch (error) {
        ctx.addIssue({
          code: zod.ZodIssueCode.custom,
          message: 'Invalid JSON string',
          params: { code },
        })
        return zod.NEVER
      }
    })
    .pipe(zod.array(zod.string(), { error: () => ({ message }) }))

const languagesSchema = jsonStringsArraySchema('Invalid languages argument', 400)

const commonSchema = zod.object({
  secret: zod.string({ error: () => ({ message: `Invalid secret argument` }) }),
  version: zod.string().optional(),
  enable: zod
    .enum(['true', 'false'])
    .transform((val) => val === 'true')
    .optional(),
  pk: zod.string().optional(),
})

const draftParamsSchema = zod.discriminatedUnion(
  'type',
  [
    // When type is 'path', urls is required
    zod
      .object({
        type: zod.literal('path'),
        urls: jsonStringsArraySchema('Invalid urls argument', 400),
        languages: languagesSchema,
      })
      .extend(commonSchema.shape),
    // When type is 'route', routes is required
    zod
      .object({
        type: zod.literal('route'),
        secret: zod.string(),
        routes: jsonStringsArraySchema('Invalid routes argument', 400),
        languages: languagesSchema,
      })
      .extend(commonSchema.shape),
    zod
      .object({
        type: zod.undefined(),
        languages: languagesSchema.optional(),
      })
      .extend(commonSchema.shape),
  ],
  { error: () => ({ message: `Invalid type/urls/routes arguments combination` }) },
)

export function parseDraftParams(url: string) {
  const { searchParams } = new URL(url)
  const searchParamsObject = Object.fromEntries(searchParams.entries())
  const result = draftParamsSchema.safeParse(searchParamsObject)
  return result
}

/**
 * Parse route to find argument, then check in url search part to find the value
 * Example {{slug}} will match slug=abc or slugs=["abc"] (if index = 0)
 * Every matches will be set as empty if not found
 * @param {string} routeUrl The Routes that can contains {{argument}}
 * @param {string} url The URL with the arguments into the search part (?arg=abc)
 * @param {number} index
 * @returns {string}
 */
export function getPathFromRoute(routeUrl: string, url: string, index = 0) {
  const { searchParams } = new URL(url)
  const matches = [...routeUrl.matchAll(/\{\{([a-z]+)\}\}/gi)]
  const map: Record<string, string> = {}
  matches.forEach((match) => {
    const key = match[1] || ''
    if (!key) {
      return
    }
    const listkey = `${key}s`
    const listParam = searchParams.get(listkey)
    if (listParam) {
      try {
        const list = JSON.parse(listParam)
        map[key] = list[index] || ''
      } catch (e) {
        map[key] = ''
      }
    } else {
      const param = searchParams.get(key)
      map[key] = param || ''
    }
  })

  return template(routeUrl, map)
}

export type HandleDraftOptions = {
  url: string
  getDirectusLanguage: () => string
  getDraftSecret?: (() => string) | undefined
  getJsonError?: (() => Response) | undefined
}

/**
 * Use handleDraft inside the default GET export of route.ts
 * You need to provide url and getDirectusLanguage
 * getDraftSecretDefault use environment variable NEXT_API_DRAFT_SECRET
 *
 * export async function GET(request: Request) {
 *   handleDraftRoute({
 *    url: request.url,
 *    getDirectusLanguage: () => 'en-CA' // default language to show
 *    getDraftSecret: () => 'secret'
 *   })
 * }
 */
export default async function handleDraftRoute({
  url,
  getDirectusLanguage,
  getDraftSecret,
  getJsonError,
}: HandleDraftOptions): Promise<Response | undefined> {
  const getSecretFunction = getDraftSecret || getDraftSecretDefault
  const getJsonErrorResponseFunction = getJsonError || getJsonErrorResponse
  const { success, error, data } = parseDraftParams(url)

  const { secret } = data ?? {}

  if (secret !== getSecretFunction() && error?.issues?.some((issue) => issue.path.includes('secret'))) {
    return getJsonErrorResponseFunction({ error: `Invalid secret argument` }, 401)
  }

  if (!success) {
    return getJsonErrorResponseFunction({ error: error.issues }, 400)
  }

  const { type, languages, version, enable } = data

  let redirectUrl

  if (type) {
    // we try to find the default language position in languages, to get the good urls to display
    // or we fallback on the first item
    const directusLang = getDirectusLanguage()
    const indexDefault = languages.indexOf(directusLang)
    const index = indexDefault !== -1 ? indexDefault : 0
    if (type === 'path') {
      const { urls } = data
      const path = urls[index] || ''

      if (!path) {
        return getJsonErrorResponse({ error: 'Invalid path' }, 400)
      }

      redirectUrl = path
    } else if (type === 'route') {
      const { routes } = data
      const route = routes?.[index] || ''

      if (!route) {
        return getJsonErrorResponse({ error: 'Invalid route' }, 400)
      }

      const pathFromRoute = getPathFromRoute(route, url, index)
      if (!pathFromRoute) {
        return getJsonErrorResponse({ error: 'Invalid route' }, 400)
      }
      redirectUrl = pathFromRoute
    }
  }

  // appending version= to redirect
  if (redirectUrl && version) {
    const withParams = redirectUrl.indexOf('?') !== -1
    redirectUrl = `${redirectUrl}${withParams ? '&' : '?'}version=${encodeURIComponent(version)}`
  }

  const draft = await draftMode()

  if (enable === true) {
    draft.enable()
  }
  if (enable === false) {
    draft.disable()
  }

  // doesn't work: using cookies() from next/headers because it's readonly
  // doesn't work if (pk) { res.cookies.set('__draftmode_pk', pk); }
  // redirect generate an error with a mutableCookies from the store, used by draftMode
  if (redirectUrl) {
    redirect(redirectUrl)
  }
  return new Response(JSON.stringify({ isEnabled: draft.isEnabled }), { status: 200 })
}
