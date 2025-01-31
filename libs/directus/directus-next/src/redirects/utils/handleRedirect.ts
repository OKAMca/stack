import { normalize } from 'path'
import type { TRedirectData } from '@okam/directus-node'
import { capitalize } from 'radashi'
import { log } from '../../logger'
import type { DirectusRouteRedirectsModule } from '../../types/directusRouteConfig'
import type { MinimalNextRequest, MinimalNextResponse } from '../../types/next'
import { getRedirectsRoute } from './getRedirectsRoute'

function splitDestination(destination: string) {
  const [pathname, search] = destination.split('?')
  if (!search) {
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
 * @param {MinimalNextRequest} request
 * @returns {Promise<Response | undefined>}
 */
export async function handleRedirect(
  request: MinimalNextRequest,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NextResponse: MinimalNextResponse,
  options?: DirectusRouteRedirectsModule,
): Promise<MinimalNextResponse | null> {
  const url = request.nextUrl.clone()
  const { pathname } = request.nextUrl
  const normalizedPathname = normalize(pathname)

  const { redirects, rewrites } = await getRedirectsRoute(options)
  const redirect = redirects.find(({ source }) => source === normalizedPathname)
  const rewrite = rewrites.find(({ source }) => source === normalizedPathname)
  const type = redirect ? 'redirect' : 'rewrite'
  const reroute = redirect ?? rewrite

  if (!reroute) {
    return null
  }

  const { permanent } = reroute
  const status = permanent ? 308 : 307

  const externalRedirect = validateExternalRedirect(reroute)
  if (externalRedirect) {
    log(`External ${type} found`, { [type]: externalRedirect, permanent })
    return NextResponse.redirect(externalRedirect, { status })
  }

  log(`${capitalize(type)} found`, { [type]: reroute, permanent })

  const { destination } = reroute
  const [destinationPathname, search] = splitDestination(destination)
  if (search) url.search = search
  url.pathname = destinationPathname

  log(`${capitalize(type)}ing to ${url.toString()} with status ${status}`)
  return NextResponse[type](url, { status })
}
