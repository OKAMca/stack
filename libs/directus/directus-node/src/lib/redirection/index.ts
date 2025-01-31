import { writeFile, readFile } from 'node:fs/promises'
import * as path from 'node:path'
import { logger } from '../../logger'
import type { TFetchRedirectsConfig, TFetchRedirectsResponse, TRedirectType, TRedirectData } from './interface'
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

/**
 * Write Redirect Data
 * @param {string} filename filename
 * @param {unknown} data redirects data (rewrites or redirects)
 */
export async function writeRedirectFile(filename: string, data: unknown): Promise<boolean> {
  try {
    const writeData = JSON.stringify(data || [])
    await writeFile(filename, writeData)
    return true
  } catch (e) {
    logger.log(`Error writing redirect file ${filename}: ${(e as Error).message}`, 'error')
  }
  return false
}

export async function readRedirectFileData(filename: string): Promise<unknown> {
  try {
    const file = await readFile(filename, { encoding: 'utf8' })
    const data = JSON.parse(file)
    return data
  } catch (e) {
    logger.log(`Failed loading redirects JSON from ${filename}: ${(e as Error).message}`, 'error')
  }
  return []
}

/**
 * Read one redirects or rewrites file
 * @param {string} filePath relative file path like './redirect/redirects.json' to the current working dir
 * @param {TRedirectType} type redirects or rewrites
 * @returns {Promise<TRedirectData[]>} an array of redirect information
 */
export async function readRedirectFile(filePath: string, type: TRedirectType = 'redirects'): Promise<TRedirectData[]> {
  const absolutePath = path.resolve(process.cwd(), filePath)
  const data = await readRedirectFileData(absolutePath)
  if (Array.isArray(data)) {
    // check data integrity
    const checkedData = data.filter((x) => {
      return x && typeof x?.source === 'string' && typeof x?.destination === 'string'
    })
    logger.log(`Loading ${type} length: ${checkedData.length}`)
    return checkedData
  }
  logger.log(`Failed loading ${type}, not a valid array`, 'error')
  return [] as TRedirectData[]
}

/**
 * Fetch and write redirects and rewrites files
 * @param {TFetchRedirectsConfig} config fetch redirects configuration
 * @returns {Promise<boolean>} true
 * @throws {Error}
 */
export async function fetchRedirects(config: TFetchRedirectsConfig): Promise<boolean> {
  const { redirectsFilename, rewritesFilename } = config

  if (!redirectsFilename) {
    throw new Error('Missing fetchRedirects configuration `redirectsFilename`')
  }

  if (!rewritesFilename) {
    throw new Error('Missing fetchRedirects configuration `rewritesFilename`')
  }

  // fetch can throw
  const data = await fetchRedirectsData(config)

  // should not throw
  await writeRedirectFile(redirectsFilename, data.redirects)
  await writeRedirectFile(rewritesFilename, data.rewrites)
  return true
}
