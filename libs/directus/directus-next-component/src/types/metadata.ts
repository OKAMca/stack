import type { TPageSettings } from '@okam/directus-next'
import type { Nullable } from '@okam/stack-ui'
import type { AlternateURLs } from 'next/dist/lib/metadata/types/alternative-urls-types'
import type { StaticImageData } from 'next/image'
import type { TDirectusFileProps } from '../components/DirectusFile/interface'

/**
 * Configuration options for metadata generation
 */
export type TMetadataOptions = {
  /**
   * Default fallback image to use for Open Graph tags when no other image is specified
   */
  ogFallbackImage: StaticImageData
  /**
   * Maximum width allowed for Open Graph images
   */
  ogImageMaxWidth: number
  /**
   * Maximum height allowed for Open Graph images
   */
  ogImageMaxHeight: number
  /**
   * Custom image loader function to transform image URLs
   * @param src Source URL of the image
   * @param width Optional width to resize the image to
   * @param height Optional height to resize the image to
   * @returns Transformed image URL
   */
  imageLoader: ({ src, width, height }: { src: string; width?: number | string; height?: number | string }) => string

  /**
   * Get the files fragment from a directus_files object
   * @param file The directus_files object
   * @returns The files fragment
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  getFilesFragment: <T extends { _typename: 'directus_files' }>(file: Nullable<T>) => Nullable<TDirectusFileProps>
  /**
   * Create alternate URLs for the page
   * @param pageSettings The page settings
   * @returns The alternate URLs
   */
  createAlternateUrls: (pageSettings: Nullable<TPageSettings>) => AlternateURLs
  /**
   * Get the hostname
   * @returns The hostname
   */
  getHostname: () => string
}
