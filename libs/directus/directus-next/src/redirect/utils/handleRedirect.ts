import type { NextRequest } from 'next/server'
import type { TDirectusRouteRedirectsModule } from '../../types/directusRouteConfig'
import { normalizePath } from '@okam/core-lib'
import { NextResponse } from 'next/server'
import { capitalize } from 'radashi'
import { log } from '../../logger'
import { getRedirectsRoute } from './getRedirectsRoute'
import { compileDestination, matchRedirect } from './matchRedirect'

function splitDestination(destination: string) {
  const [pathname = '', search] = destination.split('?')
  if (search == null || search === '') {
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
  const type = redirectMatch != null ? 'redirect' : 'rewrite'
  const match = redirectMatch ?? rewriteMatch

  if (match == null) {
    return null
  }

  const { redirect: reroute, params } = match
  const destination = params == null ? reroute.destination : compileDestination(reroute.destination, params)

  if (destination == null) {
    return null
  }

  const { permanent } = reroute
  const status = permanent ? 308 : 307

  const externalRedirect = validateExternalRedirect(destination)
  if (externalRedirect != null && externalRedirect !== '') {
    log(`External ${type} found`, { [type]: externalRedirect, permanent })
    return NextResponse.redirect(externalRedirect, { status })
  }

  log(`${capitalize(type)} found`, { [type]: reroute, permanent })

  const [destinationPathname, search] = splitDestination(destination)
  if (search != null)
    url.search = search
  url.pathname = destinationPathname

  log(`${capitalize(type)}ing to ${url.toString()} with status ${status}`)
  return NextResponse[type](url, { status })
}
