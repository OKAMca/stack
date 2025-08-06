// Use this file to export React client components (e.g. those with 'use client' directive) or other non-server utilities
export { default as DirectusLink } from './components/DirectusLink'
export { default as DirectusImg } from './components/DirectusImg'
export { default as DirectusVideo } from './components/DirectusVideo'
export { default as DirectusFile } from './components/DirectusFile'

export { default as useDirectusFile } from './utils/getDirectusFile'
export { default as useDirectusLink } from './utils/getDirectusLink'
export { default as useNavigationItems } from './utils/getNavigationItems'
export { default as useMetadata } from './utils/getDirectusMetadata'
export { logger as DirectusNextComponent } from './logger'

export type {
  /**
   * @deprecated Import from `@okam/directus-next` instead
   */
  TFiles,
} from '@okam/directus-next'

export type {
  /**
   * @deprecated Import from `@okam/directus-next` instead
   */ TPageSettings,
} from '@okam/directus-next'
export type { TNavigationItems, TNavigationItemsTree } from './types/navigationItems'
export type { TLinks } from './types/links'
export type {
  TDirectusLinkProps,
  TUseDirectusLink,
  TDirectusLink,
  TDirectusLinkPropsConfig,
  TDirectusLinkComponentsConfig,
} from './components/DirectusLink/interface'
export type { TMetadataOptions } from './types/metadata'
