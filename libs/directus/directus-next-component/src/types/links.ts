/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import type { TFiles } from './files'
import type { TPageSettings } from './page-settings'

/**
 * Represent the directus `links` collection, not the props of the DirectusLink component
 */
export type TLinks = {
  anchor?: string | null
  external_link?: string | null
  id?: string
  label?: string | null
  prefetch?: boolean | null
  replace?: boolean | null
  scroll?: boolean | null
  target?: string | null
  type?: string | null
  collection?: TPageSettings | null
  file?: TFiles | null
}
