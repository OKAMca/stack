/* eslint-disable @typescript-eslint/naming-convention */
import type { TFiles } from '../files'
import type { Fragmentize } from './Fragments'

export interface TPageSettingsTranslation {
  languages_code?:
    | {
        code?: string | null | undefined
      }
    | null
    | undefined
  page_settings_id?:
    | {
        belongs_to_collection?: string | null | undefined
        belongs_to_key?: string | null | undefined
      }
    | null
    | undefined
  title?: string | null | undefined
  slug?: string | null | undefined
  path?: string | null | undefined
  meta_description?: string | null | undefined
  no_follow?: boolean | null | undefined
  no_index?: boolean | null | undefined
  og_image?: TFiles | null | undefined
}

export interface TPageSettings {
  id: string
  belongs_to_collection?: string | null | undefined
  belongs_to_key?: string | null | undefined
  translations?: DeepNullableArray<TPageSettingsTranslation>
  route?:
    | {
        translations?: DeepNullableArray<{ route?: string | null | undefined }>
      }
    | null
    | undefined
}

export type TPageSettingsQueryItem =
  | {
      page_settings?: TPageSettings | Fragmentize<TPageSettings, 'PageSettingsFragment'>
    }
  | null
  | undefined

export type TPageSettingsItemQuery<Item extends TPageSettingsQueryItem, ItemKey extends string> = {
  [Key in ItemKey]?: MaybeArray<Item> | MaybeArray<Fragmentize<Item>>
} & {
  __typename?: 'Query'
}

export type DeepNullableArray<T> = (T | null | undefined)[] | null | undefined

export type MaybeArray<T> = T | (T | null | undefined)[] | null | undefined
