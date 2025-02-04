/* eslint-disable @typescript-eslint/naming-convention */
import { queryGql } from '@okam/directus-query'

import type { Variables } from 'graphql-request'
import { get, invert, isEqual } from 'radashi'
import { log } from '../logger'
import type { DirectusRouteConfig } from '../types/directusRouteConfig'
import { pageSettingsContext, pageSettingsVariablesContext } from './context'
import type { TPageSettingsItem, TUsePageSettingsProps } from './interface'

const [getPageSettings, setPageSettings] = pageSettingsContext()
const [getVariables, setVariables] = pageSettingsVariablesContext()

function getDirectusVariables<QueryVariables extends Variables>(
  variables: QueryVariables | undefined,
  config: DirectusRouteConfig | undefined,
) {
  const { localeMap } = config ?? {}
  if (!localeMap) {
    return variables
  }
  const locale = get<string>(variables, 'locale')
  const directusLocale = invert(localeMap)[locale] ?? locale
  return { ...variables, locale: directusLocale } as QueryVariables
}

export async function usePageSettings<
  Item,
  CollectionName extends string,
  QueryVariables extends Variables = Variables,
>(
  props?: TUsePageSettingsProps<Item, CollectionName, QueryVariables>,
  config?: DirectusRouteConfig,
): Promise<TPageSettingsItem<Item>> {
  const { document, variables, collection } = props ?? {}
  const directusVariables = getDirectusVariables(variables, config)

  const key = collection ?? get<CollectionName>(document, 'definitions[0].selectionSet.selections[0].name.value')

  if (!props || !document || !isEqual(getVariables(), directusVariables)) {
    log('Using cached page settings')
    return getPageSettings() as TPageSettingsItem<Item>
  }

  const result = await queryGql(document, directusVariables)
  log('Querying new page settings', { variables: directusVariables })

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
