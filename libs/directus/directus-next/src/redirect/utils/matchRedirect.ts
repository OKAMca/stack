import type { TRedirectData } from '@okam/directus-node/edge'
import type { MatchFunction } from 'path-to-regexp'
import { compile, match, parse } from 'path-to-regexp'
import { isArray, isEmpty, isNullish, isString, mapValues } from 'radashi'
import { log } from '../../logger'

type TRedirectParams = Partial<Record<string, string | string[]>>

/**
 * A `:param` reference. Destinations without one are used verbatim, so literal characters
 * that are pattern syntax, such as the parentheses in `/wiki/AC_(band)`, are left alone.
 */
const paramPattern = /:\w/

/**
 * Compiled source matchers, keyed by source. `handleRedirect` runs on every proxied request,
 * so each source is parsed once per process instead of once per request.
 * `null` marks a literal source, which only matches exactly (and case-sensitively),
 * or a source that failed to parse, so it is only logged once.
 */
const matchers = new Map<string, MatchFunction<TRedirectParams> | null>()

function createMatcher(source: string) {
  try {
    if (parse(source).every(isString)) {
      return null
    }
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
  return paramPattern.test(path) ? compile<TRedirectParams>(path)(params) : path
}

function decodeSegment(segment: string) {
  try {
    return decodeURIComponent(segment)
  }
  catch {
    return segment
  }
}

function decodeParam(value: string | string[] | undefined) {
  if (isArray(value)) {
    return value.map(decodeSegment)
  }
  return isNullish(value) ? value : decodeSegment(value)
}

/**
 * Fills params in each query value. Params are decoded first, since `URLSearchParams` encodes them again.
 * Values are compiled with a leading `/`, then stripped, so repeated params (`:slug*`) are joined with `/`.
 */
function compileQuery(query: string, params: TRedirectParams) {
  if (!paramPattern.test(query)) {
    return query
  }
  const decodedParams = mapValues(params, decodeParam)
  const searchParams = Array.from(new URLSearchParams(query), ([key, value]) => [
    key,
    paramPattern.test(value) ? compile(`/${value}`, { validate: false })(decodedParams).slice(1) : value,
  ])
  return new URLSearchParams(searchParams).toString()
}

/**
 * Fills the `:param` references of `destination`, in its pathname and query values, with the params captured from the source.
 * A destination without params, external or not, is returned verbatim.
 * @returns `null` if the destination cannot be compiled with `params`
 */
function compileDestination(destination: string, params: TRedirectParams) {
  try {
    if (URL.canParse(destination)) {
      const url = new URL(destination)
      if (!paramPattern.test(`${url.pathname}${url.search}`)) {
        return destination
      }
      url.pathname = compilePath(url.pathname, params)
      url.search = compileQuery(url.search, params)
      return url.toString()
    }

    if (!paramPattern.test(destination)) {
      return destination
    }
    const [pathname = '', ...query] = destination.split('?')
    const compiledPathname = compilePath(pathname, params)
    return isEmpty(query) ? compiledPathname : `${compiledPathname}?${compileQuery(query.join('?'), params)}`
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
