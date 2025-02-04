/* eslint-disable @typescript-eslint/naming-convention */
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Variables } from 'graphql-request'

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

export type IsQuerySingle<CollectionName extends string> = CollectionName extends `${string}_by_id` ? true : false

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

export type TPageSettingsItemQuery<Item, CollectionName extends string> = { __typename?: 'Query' } & {
  [CollectionKey in CollectionName]?: SingleByIdOrArray<
    Fragmentize<
      Item & {
        page_settings?: Fragmentize<TPageSettings, 'PageSettingsFragment'> | TPageSettings
      }
    >,
    IsQuerySingle<CollectionName>
  >
}

export type TPageSettingsItemDocument<
  Item,
  CollectionName extends string,
  QueryVariables extends Variables = Variables,
> = TypedDocumentNode<TPageSettingsItemQuery<Item, CollectionName>, QueryVariables>

export interface TUsePageSettingsProps<
  Item,
  CollectionName extends string,
  QueryVariables extends Variables = Variables,
> {
  document: TPageSettingsItemDocument<Item, CollectionName, QueryVariables>
  variables?: QueryVariables
  collection?: CollectionName
}
