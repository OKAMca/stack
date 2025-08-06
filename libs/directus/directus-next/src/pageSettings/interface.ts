/* eslint-disable @typescript-eslint/naming-convention */
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Variables } from 'graphql-request'
import type { TFiles } from '../files/interface'
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

export type MaybeArray<T> = T | (T | null | undefined)[] | null | undefined

/**
 * Directus page settings translations collection.
 */
export type TPageSettingsTranslation = {
  slug?: string | null
  title?: string | null
  path?: string | null
  languages_code?: { code: string } | null
  page_settings_id?: TPageSettings | null
  canonical_url?: string | null
  meta_description?: string | null
  no_follow?: boolean | null
  no_index?: boolean | null
  og_image?: TFiles | null
}

/**
 * Directus page settings collection.
 */
export type TPageSettings = {
  id: string
  belongs_to_collection?: string | null
  belongs_to_key?: string | null
  translations?: Array<TPageSettingsTranslation | null> | null
  route?: {
    translations?: Array<{ route?: string | null } | null> | null
  } | null
}

export type TPageSettingsQueryItem =
  | {
      page_settings?: TPageSettings | Fragmentize<TPageSettings, 'PageSettingsFragment'> | null | undefined
    }
  | null
  | undefined

export type TPageSettingsItemQuery<Item extends TPageSettingsQueryItem, ItemKey extends string> = {
  __typename?: 'Query'
} & {
  [Key in ItemKey]?: MaybeArray<Item> | MaybeArray<Fragmentize<Item>>
}

export type TPageSettingsItemDocument<
  Item extends TPageSettingsQueryItem,
  ItemKey extends string,
  QueryVariables extends Variables,
> = TypedDocumentNode<TPageSettingsItemQuery<Item, ItemKey>, QueryVariables>

export type TGetPageSettingsConfig = DirectusRouteConfig | Record<string, string>

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
  page_settings?:
    | Exclude<NonNullable<Item>['page_settings'], Fragmentize<TPageSettings, 'PageSettingsFragment'>>
    | null
    | undefined
}
