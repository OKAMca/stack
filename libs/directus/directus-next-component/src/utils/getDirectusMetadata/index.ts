/* eslint-disable @typescript-eslint/naming-convention */
import type { TPageSettings, TPageSettingsTranslation } from '@okam/directus-next'
import type { Nullable } from '@okam/stack-ui'
import type { Metadata } from 'next'
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import type { StaticImageData } from 'next/image'
import { min } from 'radashi'
import type { DirectusFileProps } from '../../components/DirectusFile/interface'
import type { MetadataOptions } from '../../types/metadata'
import { getDirectusFile } from '../getDirectusFile'

function withFallbacks<TPageProps extends { pageSettings: TPageSettings }>(
  pageProps: TPageProps,
  options: MetadataOptions,
) {
  const { pageSettings } = pageProps ?? {}
  const pageSettingsTranslation = pageSettings?.translations?.[0]
  const itemTranslation = pageSettings?.translations?.[0]
  const title = pageSettingsTranslation?.title ?? itemTranslation?.title
  const imageFragment =
    pageSettingsTranslation?.og_image ??
    (itemTranslation && 'featured_image' in itemTranslation ? itemTranslation.featured_image : {})
  const image = options.getFilesFragment(imageFragment as Nullable<{ _typename: 'directus_files' }>)

  return { title, image }
}

function limitOpenGraphImageDimensions(width: number, height: number, maxWidth: number, maxHeight: number) {
  return {
    width: min([parseInt(width.toString(), 10), maxWidth]),
    height: min([parseInt(height.toString(), 10), maxHeight]),
  }
}

function getOpenGraphImageFallback(fallbackImage: StaticImageData | undefined, options: MetadataOptions) {
  if (!fallbackImage) return null

  const { width, height, src } = fallbackImage
  const dimensions = limitOpenGraphImageDimensions(width, height, options?.ogImageMaxWidth, options?.ogImageMaxHeight)

  return { ...fallbackImage, ...dimensions, url: src }
}

export function getOpenGraphImage(
  image: Nullable<DirectusFileProps>,
  options: MetadataOptions,
): Nullable<Exclude<OpenGraph['images'], OpenGraph['images'][]>> {
  const directusImage = getDirectusFile(image)
  const { src, alt } = directusImage ?? {}
  const { width: limitedWidth, height: limitedHeight } =
    (directusImage?.width && directusImage?.height
      ? limitOpenGraphImageDimensions(
          directusImage.width,
          directusImage.height,
          options?.ogImageMaxWidth,
          options?.ogImageMaxHeight,
        )
      : null) ?? {}

  if (!src || !directusImage?.width) return null
  const imgHref = options?.imageLoader({
    ...image,
    src,
    width: limitedWidth,
    height: limitedHeight ?? undefined,
  })

  return {
    alt,
    type: directusImage?.type ?? undefined,
    width: limitedWidth,
    height: limitedHeight,
    url: imgHref,
  }
}

export function getMetadata<TPageProps extends { pageSettings: TPageSettings }>(
  pageProps: TPageProps,
  options: MetadataOptions,
  defaultProps?: Partial<TPageSettingsTranslation>,
) {
  const { title, image } = withFallbacks(pageProps, options)
  const { pageSettings } = pageProps ?? {}
  const translation = pageSettings?.translations?.[0]

  const metaDescription = defaultProps?.meta_description ?? translation?.meta_description
  const noFollow = defaultProps?.no_follow ?? translation?.no_follow
  const noIndex = defaultProps?.no_index ?? translation?.no_index

  const directusImage = getDirectusFile(image)
  const openGraphImage =
    getOpenGraphImage(directusImage, options) ?? getOpenGraphImageFallback(options?.ogFallbackImage, options)
  const openGraphType = options.openGraphTypeConfig[pageSettings?.belongs_to_collection ?? ''] ?? 'website'

  const alternates = options.createAlternateUrls(pageSettings)
  const { canonical } = alternates

  const metadata: Metadata = {
    title,
    metadataBase: URL.canParse(options.getHostname()) ? new URL(options.getHostname()) : undefined,
    description: metaDescription,
    openGraph: {
      title: title ?? undefined,
      description: metaDescription ?? undefined,
      images: openGraphImage ?? undefined,
      url: canonical?.toString(),
      type: openGraphType,
    },
    twitter: {
      title: title ?? undefined,
      images: openGraphImage ?? undefined,
      description: metaDescription ?? undefined,
    },
    alternates,
    robots: {
      index: !noIndex,
      follow: !noFollow,
    },
  }

  return metadata
}

/**
 * @deprecated Use `getMetadata` instead
 */
export const useMetadata = getMetadata
