import { writeFile } from 'node:fs/promises'

interface TFetchRedirectsConfig {
  graphqlEndpoint: string
  graphqlApiKey: string
  redirectsFilename: string
  rewritesFilename: string
  limit: number | undefined
}

export const redirectDefaultLimit = 2000

/**
 * Get Fetch Redirects Configuration
 * @returns {object}
 */
export function getDefaultConfig(): TFetchRedirectsConfig {
  return {
    graphqlEndpoint: process.env['NEXT_PUBLIC_GRAPHQL_URL'] || '',
    graphqlApiKey: process.env['NEXT_API_TOKEN_ADMIN'] || '',
    redirectsFilename: './redirect/redirects.json',
    rewritesFilename: './redirect/rewrites.json',
    limit: redirectDefaultLimit,
  }
}

export async function fetchRedirects(config: TFetchRedirectsConfig): Promise<boolean> {
  const { graphqlEndpoint, graphqlApiKey, redirectsFilename, rewritesFilename, limit } = config

  if (!graphqlEndpoint) {
    console.warn('Warning: Missing graphql configuration: NEXT_PUBLIC_GRAPHQL_URL is empty')
  }
  if (!graphqlApiKey) {
    console.warn('Warning: Missing graphql configuration: NEXT_API_TOKEN_ADMIN is empty')
  }

  if (!redirectsFilename || !rewritesFilename) {
    throw new Error('Missing filename')
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
      method: 'POST',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        Authorization: `Bearer ${graphqlApiKey}`,
      },
      body: JSON.stringify(graphqlBody),
    })
    const { data } = await response.json()

    const writeDataRedirects = JSON.stringify(data.redirects || [])
    await writeFile(redirectsFilename, writeDataRedirects)

    const writeDataRewrites = JSON.stringify(data.rewrites || [])
    await writeFile(rewritesFilename, writeDataRewrites)

    console.log(`Fetch successful. Redirects count: ${data.redirects?.length || 0}, Rewrites count: ${data.rewrites?.length || 0}`)
  } catch (e) {
    console.warn('Failed to fetch redirects:', e)
  }

  return true
}
