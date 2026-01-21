export { default as DirectusFile } from './components/DirectusFile'
export type { TDirectusFileProps } from './components/DirectusFile/interface'
export { default as DirectusImg } from './components/DirectusImg'
export type { TDirectusImgProps } from './components/DirectusImg/interface'

// Use this file to export React client components (e.g. those with 'use client' directive) or other non-server utilities
export { default as DirectusLink } from './components/DirectusLink'
export type {
  TDirectusLinkComponentsConfig,
  TDirectusLinkProps,
  TDirectusLinkPropsConfig,
} from './components/DirectusLink/interface'
export { default as DirectusVideo } from './components/DirectusVideo'
export type { TDirectusVideoProps } from './components/DirectusVideo/interface'
export { logger as DirectusNextComponent } from './logger'

export type * from './types'

export { getDirectusFile, useDirectusFile } from './utils/getDirectusFile'
export { getDirectusLink, useDirectusLink } from './utils/getDirectusLink'
export { getMetadata, useMetadata } from './utils/getDirectusMetadata'
export { getDirectusSearchParams } from './utils/getDirectusSearchParams'
export { getNavigationItems, useNavigationItems } from './utils/getNavigationItems'

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
