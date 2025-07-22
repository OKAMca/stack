/* eslint-disable prefer-destructuring */

import * as fetchRedirectsDataFile from './fetchRedirectsData'
// Re-export with deprecation warnings
/**
 * @deprecated Import from `@okam/directus-node/edge` instead
 */
export const fetchRedirectsData = fetchRedirectsDataFile.fetchRedirectsData
/**
 * @deprecated Import from `@okam/directus-node/edge` instead
 */
export const getDefaultConfig = fetchRedirectsDataFile.getDefaultConfig
/**
 * @deprecated Import from `@okam/directus-node/edge` instead
 */
export const redirectDefaultLimit = fetchRedirectsDataFile.redirectDefaultLimit

export type { TFetchRedirectsConfig, TFetchRedirectsResponse, TRedirectData, TRedirectType } from './interface'
export * from './utils/validateRedirects'
export * from './redirectsFile'
