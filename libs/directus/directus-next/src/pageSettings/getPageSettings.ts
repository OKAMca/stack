import type { Variables } from 'graphql-request'

import type { TDirectusRouteConfig } from '../types/directusRouteConfig'
import type { TPageSettingsQueryItem } from '../types/pageSettings'
import type { TGetPageSettingsConfig, TGetPageSettingsProps, TGetPageSettingsReturn } from './interface'
import { queryGql } from '@okam/directus-query'
import { get, invert, isEqual } from 'radashi'
import { log } from '../logger'
import { pageSettingsContext, pageSettingsVariablesContext } from './context'

const [getPageSettingsContext, setPageSettingsContext] = pageSettingsContext()
const [getVariables, setVariables] = pageSettingsVariablesContext()

function isTDirectusRouteConfig(config: TGetPageSettingsConfig | undefined): config is TDirectusRouteConfig {
  return config != null && 'localeMap' in config
}

function getDirectusVariables<QueryVariables extends Variables>(
  variables: QueryVariables | undefined,
  config: TGetPageSettingsConfig | undefined,
) {
  const localeMap = isTDirectusRouteConfig(config) ? config.localeMap : config
  if (localeMap == null) {
    return variables
  }
  const locale = get<string>(variables, 'locale')
  const directusLocale = invert(localeMap)[locale] ?? locale
  return { ...variables, locale: directusLocale } as QueryVariables
}

/**
 * @param props Optional props. Passing new props will trigger a new query if the variables have changed compared to the value of the variables in the cache. Omitting props will return the cached value.
 * @param itemKey Required if the query has more than a single root field
 * @example
 * #### `itemKey` not required
 * ```graphql
 * query PageById($id: ID!) {
 *   pages_by_id(id: $id) {
 *     ...Page
 *   }
 * }
 * ```
 *
 * #### `itemKey` required
 * Otherwise the first root field will be used as the item key automatically (not necessarily the correct one)
 * ```graphql
 * query PageAndPostById($id: ID!) {
 *   pages_by_id(id: $id) {
 *     ...Page
 *   }
 *   posts_by_id(id: $id) {
 *     ...Post
 *   }
 * }
 * ```
 * @returns The new queried page settings item or the cached value if the variables have not changed. If the query contains a fragment, the contents of the fragment will be returned.
 */
export async function getPageSettings<
  Item extends TPageSettingsQueryItem,
  ItemKey extends string = string,
  QueryVariables extends Variables = Variables,
>(
  props?: TGetPageSettingsProps<Item, ItemKey, QueryVariables>,
  itemKey?: Exclude<ItemKey, '__typename'>,
): Promise<TGetPageSettingsReturn<Item>> {
  const { variables, config } = props ?? {}
  const directusVariables = getDirectusVariables(variables, config)
  const defaultReturn = getPageSettingsContext() as Exclude<TGetPageSettingsReturn<Item>, undefined>

  if (props == null || isEqual(getVariables(), directusVariables)) {
    log('Using cached page settings', { path: defaultReturn.page_settings?.translations?.[0]?.path })
    return defaultReturn
  }

  const { document } = props
  const key = itemKey ?? get<ItemKey>(document, 'definitions[0].selectionSet.selections[0].name.value')

  log('Querying new page settings', directusVariables)
  const result = await queryGql(document, directusVariables)

  const items = result?.[key]
  const currentItem = (Array.isArray(items) ? items?.[0] : items) as TGetPageSettingsReturn<Item> | undefined
  const currentPageSettings = currentItem?.page_settings
  const currentPath = currentPageSettings?.translations?.[0]?.path

  if (currentItem == null) {
    log('No item found. Falling back to cached page settings', { path: currentPath }, 'warn')
    return defaultReturn
  }

  if (currentPageSettings == null) {
    log('No page settings found. Falling back to cached page settings', { path: currentPath }, 'warn')
    return defaultReturn
  }

  log('Caching new page settings', { path: currentPath })
  setPageSettingsContext(currentItem)
  setVariables(variables)

  return currentItem
}

/**
 * @deprecated Use `getPageSettings` instead
 */
export const usePageSettings = getPageSettings
