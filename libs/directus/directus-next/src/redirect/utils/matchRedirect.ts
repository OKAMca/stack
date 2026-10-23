import type { TRedirectData } from '@okam/directus-node/edge'
import type { MatchFunction } from 'path-to-regexp'
import { compile, match } from 'path-to-regexp'
import { isNullish } from 'radashi'
import { log } from '../../logger'

type TRedirectParams = Partial<Record<string, string | string[]>>

/**
 * Compiled source matchers, keyed by source. `handleRedirect` runs on every proxied request,
 * so each source is parsed once per process instead of once per request.
 * `null` marks a source that failed to parse, so it is only logged once.
 */
const matchers = new Map<string, MatchFunction<TRedirectParams> | null>()

function createMatcher(source: string) {
  try {
    return match<TRedirectParams>(source)
  }
  catch (error) {
    log('Invalid redirect source pattern. Skipping', { source, error }, 'warn')
    return null
  }
}

function getMatcher(source: string) {
  if (!matchers.has(source)) {
    matchers.set(source, createMatcher(source))
  }
  return matchers.get(source) ?? null
}

function matchSource(source: string, pathname: string) {
  const result = getMatcher(source)?.(pathname)
  if (isNullish(result) || result === false) {
    return null
  }
  return result.params
}

function compilePath(path: string, params: TRedirectParams) {
  return compile<TRedirectParams>(path)(params)
}

/**
 * Fills the `:param` segments of `destination` with the params captured from the source.
 * Only the pathname is compiled, so external destinations keep their origin and query.
 * @returns `null` if the destination cannot be compiled with `params`
 */
function compileDestination(destination: string, params: TRedirectParams) {
  try {
    if (URL.canParse(destination)) {
      const url = new URL(destination)
      url.pathname = compilePath(url.pathname, params)
      return url.toString()
    }

    const [pathname = '', ...search] = destination.split('?')
    return [compilePath(pathname, params), ...search].join('?')
  }
  catch (error) {
    log('Could not compile redirect destination. Skipping', { destination, params, error }, 'warn')
    return null
  }
}

interface TRedirectMatch {
  redirect: TRedirectData
  destination: string
}

/**
 * Finds the redirect matching `pathname` and resolves its destination.
 * Sources accept the Next.js `redirects()` path syntax (`/blog/:slug*`), and captured params fill the destination.
 * An exact source wins over a pattern, and keeps its destination verbatim.
 * Among patterns, the first match in `redirects` order with a valid destination wins.
 */
export function matchRedirect(redirects: TRedirectData[], pathname: string) {
  const exact = redirects.find(({ source }) => source === pathname)
  if (!isNullish(exact)) {
    return { redirect: exact, destination: exact.destination }
  }

  return redirects.reduce<TRedirectMatch | null>((found, redirect) => {
    if (!isNullish(found)) {
      return found
    }
    const params = matchSource(redirect.source, pathname)
    if (isNullish(params)) {
      return null
    }
    const destination = compileDestination(redirect.destination, params)
    return isNullish(destination) ? null : { redirect, destination }
  }, null)
}
