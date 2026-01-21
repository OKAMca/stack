import type { TRedirectData } from '@okam/directus-node/edge'
import type { NextRequest } from 'next/server'
import type { TDirectusRouteRedirectsModule } from '../../types/directusRouteConfig'
import { normalizePath } from '@okam/core-lib'
import { NextResponse } from 'next/server'
import { capitalize } from 'radashi'
import { log } from '../../logger'
import { getRedirectsRoute } from './getRedirectsRoute'

function splitDestination(destination: string) {
  const [pathname = '', search] = destination.split('?')
  if (search == null || search === '') {
    return [pathname] as const
  }
  return [pathname, `?${search}`] as const
}

function validateExternalRedirect(redirect: TRedirectData) {
  if (!URL.canParse(redirect.destination)) {
    return null
  }
  return redirect.destination
}

/**
 * Handles next redirection using directus redirects
 */
export async function handleRedirect(request: NextRequest, options: TDirectusRouteRedirectsModule = {}) {
  const url = request.nextUrl.clone()
  const { pathname } = request.nextUrl
  const normalizedPathname = normalizePath(pathname)

  const { redirects, rewrites } = await getRedirectsRoute(options)
  const redirect = redirects.find(({ source }) => source === normalizedPathname)
  const rewrite = rewrites.find(({ source }) => source === normalizedPathname)
  const type = redirect != null ? 'redirect' : 'rewrite'
  const reroute = redirect ?? rewrite

  if (reroute == null) {
    return null
  }

  const { permanent } = reroute
  const status = permanent ? 308 : 307

  const externalRedirect = validateExternalRedirect(reroute)
  if (externalRedirect != null && externalRedirect !== '') {
    log(`External ${type} found`, { [type]: externalRedirect, permanent })
    return NextResponse.redirect(externalRedirect, { status })
  }

  log(`${capitalize(type)} found`, { [type]: reroute, permanent })

  const { destination } = reroute
  const [destinationPathname, search] = splitDestination(destination)
  if (search != null)
    url.search = search
  url.pathname = destinationPathname

  log(`${capitalize(type)}ing to ${url.toString()} with status ${status}`)
  return NextResponse[type](url, { status })
}
