import { normalizePath } from '@okam/core-lib'
import type { TRedirectData } from '../interface'

export function isRedirect(redirect: unknown): boolean {
  return !!redirect && typeof redirect === 'object' && 'source' in redirect && 'destination' in redirect
}

export function normalizeRedirects(redirects: (TRedirectData | null)[] | null): TRedirectData[] {
  if (!redirects || !Array.isArray(redirects)) return []
  return redirects.flatMap((redirect) => {
    const { source, destination, ...rest } = redirect ?? {}
    if (!redirect || !source || !destination || !isRedirect(redirect)) return []
    return [
      {
        ...rest,
        source: normalizePath(source),
        destination: normalizePath(destination),
      },
    ]
  })
}
