import type { TFetchRedirectsConfig, TRedirectData, TRedirectType } from './interface'
import { readFile, writeFile } from 'node:fs/promises'
import * as path from 'node:path'
import { logger } from '../../logger'
import { fetchRedirectsData } from './fetchRedirectsData'

/**
 * Write Redirect Data
 * @param {string} filename filename
 * @param {unknown} data redirects data (rewrites or redirects)
 */
export async function writeRedirectFile(filename: string, data: unknown): Promise<boolean> {
  try {
    const writeData = JSON.stringify(data ?? [])
    await writeFile(filename, writeData)
    return true
  }
  catch (e) {
    logger.log(`Error writing redirect file ${filename}: ${(e as Error).message}`, 'error')
  }
  return false
}

export async function readRedirectFileData(filename: string): Promise<TRedirectData[]> {
  try {
    const file = await readFile(filename, { encoding: 'utf8' })
    const data = JSON.parse(file) as TRedirectData[]
    return data
  }
  catch (e) {
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
  // check data integrity
  const checkedData = data.filter((x): x is TRedirectData => {
    return x != null && typeof x.source === 'string' && typeof x.destination === 'string'
  })
  logger.log(`Loading ${type} length: ${checkedData.length}`)
  return checkedData
}

/**
 * Fetch and write redirects and rewrites files
 * @param {TFetchRedirectsConfig} config fetch redirects configuration
 * @returns {Promise<boolean>} true
 * @throws {Error}
 */
export async function fetchRedirects(config: TFetchRedirectsConfig): Promise<boolean> {
  const { redirectsFilename, rewritesFilename } = config

  if (redirectsFilename == null || redirectsFilename === '') {
    throw new Error('Missing fetchRedirects configuration `redirectsFilename`')
  }

  if (rewritesFilename == null || rewritesFilename === '') {
    throw new Error('Missing fetchRedirects configuration `rewritesFilename`')
  }

  // fetch can throw
  const data = await fetchRedirectsData(config)

  // should not throw
  await writeRedirectFile(redirectsFilename, data.redirects)
  await writeRedirectFile(rewritesFilename, data.rewrites)
  return true
}
