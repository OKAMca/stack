import { logger } from '@okam/logger'
import type { TFetchRedirectsConfig, TFetchRedirectsResponse } from './interface'
import { normalizeRedirects } from './utils/validateRedirects'

export const redirectDefaultLimit = 2000

/**
 * Get Fetch Redirects Configuration
 * @returns {object}
 */
export function getDefaultConfig(): TFetchRedirectsConfig {
  return {
    graphqlEndpoint: process.env['NEXT_REDIRECT_GRAPHQL_URL'] || process.env['NEXT_PUBLIC_GRAPHQL_URL'] || '',
    graphqlApiKey: process.env['NEXT_API_TOKEN_ADMIN'] || '',
    redirectsFilename: './redirect/redirects.json',
    rewritesFilename: './redirect/rewrites.json',
    limit: redirectDefaultLimit,
  }
}

export async function fetchRedirectsData(
  config: TFetchRedirectsConfig,
  init?: Omit<RequestInit, 'body' | 'method' | 'headers'>,
): Promise<TFetchRedirectsResponse> {
  const {
    graphqlApiKey: defaultGraphqlApiKey,
    graphqlEndpoint: defaultGraphqlEndpoint,
    limit: defaultLimit,
  } = getDefaultConfig()
  const {
    graphqlEndpoint = defaultGraphqlEndpoint,
    graphqlApiKey = defaultGraphqlApiKey,
    limit = defaultLimit,
  } = config

  if (!graphqlEndpoint) {
    throw new Error(
      'Missing fetchRedirects configuration `graphqlEndpoint`. Check environment variables NEXT_REDIRECT_GRAPHQL_URL or NEXT_PUBLIC_GRAPHQL_URL',
    )
  }
  if (!graphqlApiKey) {
    throw new Error(
      'Missing fetchRedirects configuration `graphqlApiKey`. Check environment variable NEXT_API_TOKEN_ADMIN',
    )
  }

  const query = `query fetchRedirects($limit: Int = 2000) {
  redirects(filter: {status:{_eq:"published"},isrewrite:{_eq:false}}, sort: "sort", limit: $limit) {
    source
    destination
    permanent
    locale
  }
  rewrites: redirects(filter: {status:{_eq:"published"},isrewrite:{_eq:true}}, sort: "sort", limit: $limit) {
    source
    destination
    permanent
    locale
  }
}`

  const graphqlBody = {
    query,
    // "operationName": "",
    variables: {
      limit: Number(limit) || redirectDefaultLimit,
    },
  }

  try {
    // console.info(`Fetching redirects on ${graphqlEndpoint}`)
    const response = await fetch(graphqlEndpoint, {
      ...init,
      method: 'POST',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        Authorization: `Bearer ${graphqlApiKey}`,
      },
      body: JSON.stringify(graphqlBody),
    })
    const { data } = await response.json()
    const { redirects, rewrites } = data ?? {}

    if (!redirects?.length && !rewrites?.length) {
      logger.log('No redirects/rewrites found', 'warn')
      return {
        redirects: [],
        rewrites: [],
      }
    }

    logger.log(`Fetch redirects count: ${redirects?.length || 0}, rewrites count: ${rewrites?.length || 0}`)
    return {
      redirects: normalizeRedirects(redirects),
      rewrites: normalizeRedirects(rewrites),
    }
  } catch (e) {
    logger.log(`Error fetching redirects: ${(e as Error).message}`, 'error')
  }
  return {
    redirects: [],
    rewrites: [],
  }
}
