// Use this file to export React client components (e.g. those with 'use client' directive) or other non-server utilities
export { default as DirectusLink } from './components/DirectusLink'
export { default as DirectusImg } from './components/DirectusImg'
export { default as DirectusVideo } from './components/DirectusVideo'
export { default as DirectusFile } from './components/DirectusFile'

export { getDirectusFile, useDirectusFile } from './utils/getDirectusFile'
export { getDirectusLink, useDirectusLink } from './utils/getDirectusLink'
export { getNavigationItems, useNavigationItems } from './utils/getNavigationItems'
export { getMetadata, useMetadata } from './utils/getDirectusMetadata'

export { logger as DirectusNextComponent } from './logger'

export * from './types'
export type {
  DirectusLinkProps,
  DirectusLinkPropsConfig,
  DirectusLinkComponentsConfig,
} from './components/DirectusLink/interface'
export type { DirectusFileProps } from './components/DirectusFile/interface'
export type { TDirectusImgProps } from './components/DirectusImg/interface'
export type { TDirectusVideoProps } from './components/DirectusVideo/interface'

export type {
  /**
   * @deprecated Import from `@okam/directus-next` instead
   */
  TFiles,
} from '@okam/directus-next'
