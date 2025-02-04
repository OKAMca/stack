/* eslint-disable @typescript-eslint/naming-convention */
import { queryGql } from '@okam/directus-query'

import type { Variables } from 'graphql-request'
import { get, invert, isEqual } from 'radashi'
import { log } from '../logger'
import type { DirectusRouteConfig } from '../types/directusRouteConfig'
import { pageSettingsContext, pageSettingsVariablesContext } from './context'
import type { TUsePageSettingsConfig, TPageSettingsItem, TUsePageSettingsProps } from './interface'

const [getPageSettings, setPageSettings] = pageSettingsContext()
const [getVariables, setVariables] = pageSettingsVariablesContext()

function isDirectusRouteConfig(config: TUsePageSettingsConfig | undefined): config is DirectusRouteConfig {
  return !!config && 'localeMap' in config
}

function getDirectusVariables<QueryVariables extends Variables>(
  variables: QueryVariables | undefined,
  config: TUsePageSettingsConfig | undefined,
) {
  const localeMap = isDirectusRouteConfig(config) ? config.localeMap : config
  if (!localeMap) {
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
 * #### `collection` required
 * Otherwise the first root field will be used as the collection name automatically (not necessarily the correct one)
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
 * @returns The new queried page settings item or the cached value if the variables have not changed.
 */
export async function usePageSettings<Item, ItemKey extends string, QueryVariables extends Variables = Variables>(
  props?: TUsePageSettingsProps<Item, ItemKey, QueryVariables>,
  itemKey?: Exclude<ItemKey, '__typename'>,
): Promise<TPageSettingsItem<Item>> {
  const { variables, config } = props ?? {}
  const directusVariables = getDirectusVariables(variables, config)

  if (!props || isEqual(getVariables(), directusVariables)) {
    log('Using cached page settings')
    return getPageSettings() as TPageSettingsItem<Item>
  }

  const { document } = props
  const key = itemKey ?? get<ItemKey>(document, 'definitions[0].selectionSet.selections[0].name.value')

  log('Querying new page settings', directusVariables)
  const result = await queryGql(document, directusVariables)

  const items = result?.[key]
  const currentItem = (Array.isArray(items) ? items?.[0] : items) as TPageSettingsItem<Item>
  const currentPageSettings = currentItem?.page_settings
  const currentPath = currentPageSettings?.translations?.[0]?.path

  if (!currentPageSettings) {
    log('Empty page settings. Falling back to cached page settings')
    return getPageSettings() as TPageSettingsItem<Item>
  }

  log('Caching new page settings with path', { path: currentPath })
  setPageSettings(currentItem)
  setVariables(variables)

  return currentItem
}
