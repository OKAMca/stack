/**
 * @fileoverview Export file for functions that are used in edge functions (middleware-compatible)
 */

export { fetchRedirectsData, getDefaultConfig } from './lib/redirection/fetchRedirectsData'

export type {
  TFetchRedirectsConfig,
  TFetchRedirectsResponse,
  TRedirectData,
  TRedirectType,
} from './lib/redirection/interface'
export { isRedirect, normalizeRedirects } from './lib/redirection/utils/validateRedirects'
