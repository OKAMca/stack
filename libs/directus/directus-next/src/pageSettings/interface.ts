/* eslint-disable @typescript-eslint/naming-convention */
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Nullable } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import type { DirectusRouteConfig } from '../types/directusRouteConfig'
import type { Fragmentize } from '../types/Fragments'
import type { PageSettings, PageSettingsItemQuery, PageSettingsQueryItem } from '../types/pageSettings'

export type PageSettingsItemDocument<
  Item extends PageSettingsQueryItem,
  ItemKey extends string,
  QueryVariables extends Variables,
> = TypedDocumentNode<PageSettingsItemQuery<Item, ItemKey>, QueryVariables>

export type GetPageSettingsConfig = DirectusRouteConfig | Record<string, string>

/**
 * If not using a fragment in the item key, all type parameters must be passed. Otherwise, only the `page_settings` field will be in the type definition.
 * If using a fragment in the item key, the return type will contain the fragment.
 */
export interface GetPageSettingsProps<
  Item extends PageSettingsQueryItem,
  ItemKey extends string,
  QueryVariables extends Variables,
> {
  document: PageSettingsItemDocument<Item, ItemKey, QueryVariables>
  /**
   * `variables.locale` is a special value that will get mapped according to the config.
   */
  variables?: QueryVariables
  /**
   * Either a directus route config or directly a locale map. Not passing a config while passing a document will result in direct usage of the `locale` variable.
   */
  config?: GetPageSettingsConfig
}

export type GetPageSettingsReturn<Item extends PageSettingsQueryItem> = Omit<Item, 'page_settings'> & {
  page_settings?: Nullable<
    Exclude<NonNullable<Item>['page_settings'], Fragmentize<PageSettings, 'PageSettingsFragment'>>
  >
}
