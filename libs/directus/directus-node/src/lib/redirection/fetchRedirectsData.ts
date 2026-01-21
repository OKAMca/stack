import type { TFetchRedirectsConfig, TFetchRedirectsResponse, TRedirectData } from './interface'
import { logger } from '@okam/logger'
import { normalizeRedirects } from './utils/validateRedirects'

export const redirectDefaultLimit = 2000

/**
 * Get Fetch Redirects Configuration
 * @returns {object}
 */
export function getDefaultConfig(): TFetchRedirectsConfig {
  return {
    // eslint-disable-next-line ts/prefer-nullish-coalescing, ts/strict-boolean-expressions -- empty string env var should fallback to next option
    graphqlEndpoint: process.env['NEXT_REDIRECT_GRAPHQL_URL'] || process.env['NEXT_PUBLIC_GRAPHQL_URL'] || '',
    // eslint-disable-next-line ts/prefer-nullish-coalescing, ts/strict-boolean-expressions -- empty string env var should fallback to default
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

  if (graphqlEndpoint == null || graphqlEndpoint === '') {
    throw new Error(
      'Missing fetchRedirects configuration `graphqlEndpoint`. Check environment variables NEXT_REDIRECT_GRAPHQL_URL or NEXT_PUBLIC_GRAPHQL_URL',
    )
  }
  if (graphqlApiKey == null || graphqlApiKey === '') {
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

        'Content-Type': 'application/json',
        'Authorization': `Bearer ${graphqlApiKey}`,
      },
      body: JSON.stringify(graphqlBody),
    })
    const json = await response.json() as { data?: { redirects?: TRedirectData[], rewrites?: TRedirectData[] } }
    const { redirects, rewrites } = json.data ?? {}

    if ((redirects == null || redirects.length === 0) && (rewrites == null || rewrites.length === 0)) {
      logger.log('No redirects/rewrites found', 'warn')
      return {
        redirects: [],
        rewrites: [],
      }
    }

    logger.log(`Fetch redirects count: ${redirects?.length ?? 0}, rewrites count: ${rewrites?.length ?? 0}`)
    return {
      redirects: normalizeRedirects(redirects ?? null),
      rewrites: normalizeRedirects(rewrites ?? null),
    }
  }
  catch (e) {
    logger.log(`Error fetching redirects: ${(e as Error).message}`, 'error')
  }
  return {
    redirects: [],
    rewrites: [],
  }
}
