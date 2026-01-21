import type { TRedirectData } from '../interface'
import { normalizePath } from '@okam/core-lib'

export function isRedirect(redirect: unknown): redirect is TRedirectData {
  return redirect != null && typeof redirect === 'object' && 'source' in redirect && 'destination' in redirect
}

export function normalizeRedirects(redirects: (TRedirectData | null)[] | null): TRedirectData[] {
  if (redirects == null || !Array.isArray(redirects))
    return []
  return redirects.flatMap((redirect) => {
    const { source, destination, ...rest } = redirect ?? {}
    if (redirect == null || source == null || source === '' || destination == null || destination === '' || !isRedirect(redirect))
      return []
    return [
      {
        ...rest,
        source: normalizePath(source),
        destination: normalizePath(destination),
      },
    ]
  })
}
