import { writeFile } from 'node:fs/promises'

interface TFetchRedirectsConfig {
  graphqlEndpoint: string
  graphqlApiKey: string
  redirectsFilename: string
  rewritesFilename: string
}
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
  }
}

export async function fetchRedirects(config: TFetchRedirectsConfig): Promise<boolean> {
  const { graphqlEndpoint, graphqlApiKey, redirectsFilename, rewritesFilename } = config

  if (!graphqlEndpoint || !graphqlApiKey) {
    throw new Error('Missing graphql configuration: NEXT_PUBLIC_GRAPHQL_URL or NEXT_API_TOKEN_ADMIN')
  }

  if (!redirectsFilename || !rewritesFilename) {
    throw new Error('Missing filename')
  }

  const query = `query fetchRedirects {
  redirects(filter: {status:{_eq:"published"},isrewrite:{_eq:false}}, sort: "sort") {
    source
    destination
    permanent
    locale
  }
  rewrites: redirects(filter: {status:{_eq:"published"},isrewrite:{_eq:true}}, sort: "sort") {
    source
    destination
    permanent
    locale
  }
}`

  const graphqlBody = {
    query,
    // "operationName": "",
    variables: {},
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
  } catch (e) {
    // console.error('GraphQL Error', (e as Error).message)
    // return false
  }

  return true
}
