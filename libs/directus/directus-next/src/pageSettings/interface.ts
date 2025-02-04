/* eslint-disable @typescript-eslint/naming-convention */
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Variables } from 'graphql-request'
import type { DirectusRouteConfig } from '../types/directusRouteConfig'

export type Fragmentize<FragmentData, FragmentName extends string = string> =
  | {
      ' $fragmentRefs'?:
        | {
            [FragmentKey in FragmentName]?: FragmentData | null | undefined
          }
        | null
        | undefined
    }
  | null
  | undefined

export type IsQuerySingle<ItemKey extends string> = ItemKey extends `${string}_by_id` ? true : false

export type SingleByIdOrArray<Item, IsSingle extends boolean> = IsSingle extends true ? Item : Item[]

export type TPageSettingsTranslation = {
  slug?: string | null
  title?: string | null
  path?: string | null
  languages_code?: { code: string } | null
  page_settings_id?: TPageSettings | null
}

export type TPageSettings = {
  id: string
  belongs_to_collection?: string | null
  belongs_to_key?: string | null
  translations?: Array<TPageSettingsTranslation | null> | null
  route?: {
    translations?: Array<{ route?: string | null } | null> | null
  } | null
}

export type TPageSettingsItem<Item> = Item & {
  page_settings?: TPageSettings
}

export type TPageSettingsQueryVariables = { path: string } | { id: string; collection?: string; locale: string }

export type TPageSettingsItemQuery<Item, ItemKey extends string> = { __typename?: 'Query' } & {
  [CollectionKey in ItemKey]?: SingleByIdOrArray<
    Fragmentize<
      Item & {
        page_settings?: Fragmentize<TPageSettings, 'PageSettingsFragment'> | TPageSettings
      }
    >,
    IsQuerySingle<ItemKey>
  >
}

export type TPageSettingsItemDocument<
  Item,
  ItemKey extends string,
  QueryVariables extends Variables = Variables,
> = TypedDocumentNode<TPageSettingsItemQuery<Item, ItemKey>, QueryVariables>

export type TUsePageSettingsConfig = DirectusRouteConfig | Record<string, string>

export interface TUsePageSettingsProps<Item, ItemKey extends string, QueryVariables extends Variables = Variables> {
  document: TPageSettingsItemDocument<Item, ItemKey, QueryVariables>
  /**
   * `variables.locale` is a special value that will get mapped according to the config.
   */
  variables?: QueryVariables
  /**
   * Either a directus route config or directly a locale map. Not passing a config while passing a document will result in direct usage of the `locale` variable.
   */
  config?: TUsePageSettingsConfig
}
