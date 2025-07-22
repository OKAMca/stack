import type { TFetchRedirectsResponse } from '@okam/directus-node/edge'
import { log } from '../../logger'
import type { DirectusRouteRedirectsModule } from '../../types/directusRouteConfig'
import { getApiRouteUrlDefault, getRedirectSecretDefault } from '../env'

const defaultApiRoute = '/api/redirect'

/**
 * Gets a response from `options.apiRoute`
 * @param {DirectusRouteRedirectsModule} options
 * @returns {Promise<TFetchRedirectsResponse>}
 */
export async function getRedirectsRoute({
  apiRoute = defaultApiRoute,
  getApiRouteUrl = getApiRouteUrlDefault,
  getRedirectSecret = getRedirectSecretDefault,
}: DirectusRouteRedirectsModule = {}): Promise<TFetchRedirectsResponse> {
  const secret = getRedirectSecret()
  try {
    const url = new URL(apiRoute, getApiRouteUrl())
    url.searchParams.set('secret', encodeURIComponent(secret))
    const response = await fetch(url)

    if (!response.ok) {
      log(`${apiRoute} not ok. Returned`, { status: response.status }, 'error')
      return { redirects: [], rewrites: [] }
    }
    const data = await response.json()

    return data
  } catch (error) {
    log(`Error fetching redirects from ${apiRoute}.`, { error }, 'error')
    return { redirects: [], rewrites: [] }
  }
}
