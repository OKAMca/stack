/**
 * @fileoverview Export file for functions that are used in edge functions (middleware-compatible)
 */

export type { TFetchRedirectsConfig, TFetchRedirectsResponse, TRedirectData, TRedirectType } from './lib/redirection'

export { fetchRedirectsData, getDefaultConfig, isRedirect, normalizeRedirects } from './lib/redirection'
