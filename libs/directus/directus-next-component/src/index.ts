// Use this file to export React client components (e.g. those with 'use client' directive) or other non-server utilities
export { default as DirectusLink } from './components/DirectusLink'
export { default as DirectusImg } from './components/DirectusImg'
export { default as DirectusVideo } from './components/DirectusVideo'
export { default as DirectusFile } from './components/DirectusFile'

export { useDirectusLink } from './hooks/useDirectusLink'
export { default as useNavigationItems } from './hooks/navigation-items'
export { default as useMetadata } from './hooks/directus-metadata'
export { logger as DirectusNextComponent } from './logger'

export { directusFile } from './utils/directusFile'
export { directusSearchParams } from './utils/directusSearchParams'
export { directusLink } from './utils/directusLink'

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
export type { TNavigationItems, TNavigationItemsTree } from './types/navigation-items'
export type { TLinks, SearchParams } from './types/links'
export type { TDirectusLinkProps, TDirectusLinkComponentsConfig } from './components/DirectusLink/interface'
export type { TMetadataOptions } from './types/metadata'
export type { TDirectusLink, TDirectusLinkPropsConfig, TDirectusLinkAria } from './types/directus-link'
