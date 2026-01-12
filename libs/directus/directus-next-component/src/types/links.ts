/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import type { PageSettings, TFiles } from '@okam/directus-next'
import type { Nullable } from '@okam/stack-ui'

/**
 * Represent the directus `links` collection, not the props of the DirectusLink component
 */
export interface TLinks {
  anchor?: Nullable<string>
  external_link?: Nullable<string>
  id?: string
  label?: Nullable<string>
  prefetch?: Nullable<boolean>
  replace?: Nullable<boolean>
  scroll?: Nullable<boolean>
  target?: Nullable<string>
  type?: Nullable<string>
  collection?: Nullable<PageSettings>
  file?: Nullable<TFiles>
  params?: Nullable<Nullable<SearchParams>[]>
}

export interface SearchParams {
  id?: string
  name?: Nullable<string>
  value?: Nullable<string>
  link?: Nullable<TLinks>
}
