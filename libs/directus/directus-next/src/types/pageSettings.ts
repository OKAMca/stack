/* eslint-disable @typescript-eslint/naming-convention */
import type { Nullable } from '@okam/stack-ui'
import type { Fragmentize } from './Fragments'

export interface PageSettingsTranslation {
  languages_code?: Nullable<{
    code?: Nullable<string>
  }>
  page_settings_id?: Nullable<{
    belongs_to_collection?: Nullable<string>
    belongs_to_key?: Nullable<string>
  }>
  title?: Nullable<string>
  slug?: Nullable<string>
  path?: Nullable<string>
}

export interface PageSettings {
  id: string
  belongs_to_collection?: Nullable<string>
  belongs_to_key?: Nullable<string>
  translations?: DeepNullableArray<PageSettingsTranslation>
  route?: Nullable<{
    translations?: DeepNullableArray<{ route?: Nullable<string> }>
  }>
}

export type PageSettingsQueryItem = Nullable<{
  page_settings?: PageSettings | Fragmentize<PageSettings, 'PageSettingsFragment'>
}>

export type PageSettingsItemQuery<Item extends PageSettingsQueryItem, ItemKey extends string> = {
  [Key in ItemKey]?: MaybeArray<Item> | MaybeArray<Fragmentize<Item>>
} & {
  __typename?: 'Query'
}

export type DeepNullableArray<T> = Nullable<Nullable<T>[]>

export type MaybeArray<T> = T | (T | null | undefined)[] | null | undefined
