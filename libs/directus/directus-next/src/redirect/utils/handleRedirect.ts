import type { NextRequest } from 'next/server'
import type { TDirectusRouteRedirectsModule } from '../../types/directusRouteConfig'
import { normalizePath } from '@okam/core-lib'
import { NextResponse } from 'next/server'
import { capitalize, isEmpty, isNullish } from 'radashi'
import { log } from '../../logger'
import { getRedirectsRoute } from './getRedirectsRoute'
import { matchRedirect } from './matchRedirect'

function splitDestination(destination: string) {
  const [pathname = '', search] = destination.split('?')
  if (isEmpty(search)) {
    return [pathname] as const
  }
  return [pathname, `?${search}`] as const
}

function validateExternalRedirect(destination: string) {
  if (!URL.canParse(destination)) {
    return null
  }
  return destination
}

/**
 * Handles next redirection using directus redirects
 */
export async function handleRedirect(request: NextRequest, options: TDirectusRouteRedirectsModule = {}) {
  const url = request.nextUrl.clone()
  const { pathname } = request.nextUrl
  const normalizedPathname = normalizePath(pathname)

  const { redirects, rewrites } = await getRedirectsRoute(options)
  const redirectMatch = matchRedirect(redirects, normalizedPathname)
  const rewriteMatch = matchRedirect(rewrites, normalizedPathname)
  const type = !isNullish(redirectMatch) ? 'redirect' : 'rewrite'
  const match = redirectMatch ?? rewriteMatch

  if (isNullish(match)) {
    return null
  }

  const { redirect: reroute, destination } = match
  const { permanent } = reroute
  const status = permanent ? 308 : 307

  const externalRedirect = validateExternalRedirect(destination)
  if (!isEmpty(externalRedirect)) {
    log(`External ${type} found`, { [type]: externalRedirect, permanent })
    return NextResponse.redirect(externalRedirect, { status })
  }

  log(`${capitalize(type)} found`, { [type]: reroute, permanent })

  const [destinationPathname, search] = splitDestination(destination)
  if (!isNullish(search))
    url.search = search
  url.pathname = destinationPathname

  log(`${capitalize(type)}ing to ${url.toString()} with status ${status}`)
  return NextResponse[type](url, { status })
}
