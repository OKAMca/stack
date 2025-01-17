// Usage: pnpm nx test directus-node
// add NEXT_SERVER_GRAPHQL_URL and NEXT_API_TOKEN_ADMIN to your .env

import { fetchRedirects, fetchRedirectsData, getDefaultConfig, readRedirectFile, redirectDefaultLimit, writeRedirectFile } from '../redirection'

// write/read in coverage, tmp or dist ?
const redirectsFilename = 'dist/directus-node-redirects.test.json'
const rewritesFilename = 'dist/directus-node-rewrites.test.json'

describe('checking constants and config', () => {
  test('redirectDefaultLimit is 2000', () => {
    expect(redirectDefaultLimit).toBe(2000)
  })

  test('getDefaultConfig returns a default configuration object', () => {
    const config = getDefaultConfig()
    expect(config.limit).toBe(2000)
    expect(config.redirectsFilename).toBe('./redirect/redirects.json')
    expect(config).toHaveProperty('graphqlEndpoint')
    expect(config).toHaveProperty('graphqlApiKey')
    expect(config).toHaveProperty('rewritesFilename')
  })
})

describe('fetching data', () => {
  test('fetchRedirectsData returns data, using default .env config', async () => {
    const config = getDefaultConfig()
    const data = await fetchRedirectsData(config)
    expect(Array.isArray(data.redirects)).toBe(true)
    expect(Array.isArray(data.rewrites)).toBe(true)
    expect(fetchRedirectsData({
      graphqlEndpoint: '',
      graphqlApiKey: '',
      limit: 0,
    })).rejects.toThrow()
  })
})

describe('writing / reading file', () => {
  test('writeRedirectFile', async () => {
    const data = [
      {source:'a', destination: 'b'},
    ]

    await expect(writeRedirectFile(redirectsFilename, data)).resolves.toBe(true)
  })

  test('readRedirectFile', async () => {
    const data = await readRedirectFile(redirectsFilename, 'redirects')
    expect(data.length).toBe(1)
    expect(data[0].source).toBe('a')
  })
})

describe('Fetch redirect main function', () => {
  test('fetchRedirect with dist/ output', async () => {
    const config = {
      ...getDefaultConfig(),
      redirectsFilename,
      rewritesFilename,
      limit: 10,
    }

    await expect(fetchRedirects(config)).resolves.toBe(true)
  })
})