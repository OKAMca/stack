import type { HandleRedirectOptions } from './interface'
import { fetchRedirectsData } from '@okam/directus-node/edge'
import { getJsonErrorResponse } from '../response'
import { getRedirectSecretDefault } from './env'

export function parseRedirectParams(url: string) {
  const { searchParams } = new URL(url)
  const secret = searchParams.get('secret') ?? ''
  return { secret }
}

/**
 * Wrapper for `fetchRedirectsData` with secret validation
 */
export default async function handleRedirectsRoute({
  url,
  getRedirectSecret = getRedirectSecretDefault,
  getJsonError = getJsonErrorResponse,
  getDirectusApiToken,
  getDirectusGraphqlUrl,
  limit,
  init,
}: HandleRedirectOptions): Promise<Response | undefined> {
  const { secret } = parseRedirectParams(url)

  if (secret !== getRedirectSecret()) {
    return getJsonError({ error: 'Invalid argument' }, 401)
  }

  const graphqlEndpoint = getDirectusGraphqlUrl?.()
  const graphqlApiKey = getDirectusApiToken?.()

  const { redirects, rewrites } = await fetchRedirectsData({ graphqlEndpoint, graphqlApiKey, limit }, init)

  return new Response(JSON.stringify({ redirects, rewrites }), { status: 200 })
}
