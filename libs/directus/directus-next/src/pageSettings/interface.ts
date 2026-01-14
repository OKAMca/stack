/* eslint-disable @typescript-eslint/naming-convention */
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Nullable } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import type { TDirectusRouteConfig } from '../types/directusRouteConfig'
import type { Fragmentize } from '../types/Fragments'
import type { TPageSettings, TPageSettingsItemQuery, TPageSettingsQueryItem } from '../types/pageSettings'

export type TPageSettingsItemDocument<
  Item extends TPageSettingsQueryItem,
  ItemKey extends string,
  QueryVariables extends Variables,
> = TypedDocumentNode<TPageSettingsItemQuery<Item, ItemKey>, QueryVariables>

export type TGetPageSettingsConfig = TDirectusRouteConfig | Record<string, string>

/**
 * If not using a fragment in the item key, all type parameters must be passed. Otherwise, only the `page_settings` field will be in the type definition.
 * If using a fragment in the item key, the return type will contain the fragment.
 */
export interface TGetPageSettingsProps<
  Item extends TPageSettingsQueryItem,
  ItemKey extends string,
  QueryVariables extends Variables,
> {
  document: TPageSettingsItemDocument<Item, ItemKey, QueryVariables>
  /**
   * `variables.locale` is a special value that will get mapped according to the config.
   */
  variables?: QueryVariables
  /**
   * Either a directus route config or directly a locale map. Not passing a config while passing a document will result in direct usage of the `locale` variable.
   */
  config?: TGetPageSettingsConfig
}

export type TGetPageSettingsReturn<Item extends TPageSettingsQueryItem> = Omit<Item, 'page_settings'> & {
  page_settings?: Nullable<
    Exclude<NonNullable<Item>['page_settings'], Fragmentize<TPageSettings, 'PageSettingsFragment'>>
  >
}
