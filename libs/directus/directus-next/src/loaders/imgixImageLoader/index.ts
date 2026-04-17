import type { ImageLoaderProps } from 'next/image'
import { isEmpty } from 'radashi'
import z from 'zod'
import directusImageLoader from '../directusImageLoader'

/**
 * Directus `fit` → imgix `fit` mapping.
 *
 * Directus  | imgix  | behaviour
 * --------- | ------ | ---------
 * cover     | crop   | fill frame, crop excess
 * contain   | fill   | fit inside frame, fill remainder
 * inside    | max    | fit inside frame, no upscale
 * outside   | min    | fit outside frame, no downscale
 */
const DIRECTUS_FIT_TO_IMGIX: Record<string, string> = {
  cover: 'crop',
  contain: 'fill',
  inside: 'max',
  outside: 'min',
}

/**
 * Next.js image loader that serves Directus assets through imgix.
 *
 * When `NEXT_PUBLIC_IMGIX_SUBDOMAIN` is set, the loader:
 * 1. Extracts the asset ID and extension from the Directus asset URL.
 * 2. Translates all Directus transformation params to their imgix equivalents.
 * 3. Applies `width` and `quality` from Next.js loader props.
 *
 * Falls back to plain Directus transformation params when the env var is absent
 * or the URL does not match the expected Directus asset pattern.
 *
 * Any transformation params that cannot be derived from the loader props alone
 * (`fit`, `height`, `withoutEnlargement`, `transforms`) should be set on the
 * `src` URL before passing it to the loader (e.g. via `getDirectusFile`).
 *
 * @param {string} props.src Image source. The following Imgix parameters will be set:
 * - `w`: `width` prop
 * - `h`: `height` URL parameter
 * - `auto`: `'format,compress'`
 *   - `format` lets imgix serve webp/avif based on the Accept header.
 *   - `compress` applies lossless optimisations on top.
 * - `q`: `quality` prop
 * - `fit`: `fit` URL parameter, translated from Directus values to Imgix values
 * - `upscale`: set to false if the `withoutEnlargement` URL parameter is set to true
 */
export default function imgixImageLoader({ src, width, quality }: ImageLoaderProps): string {
  // Pass through local/static assets — let Next.js handle them
  if (src.startsWith('/_next/') || src.startsWith('/')) {
    return src
  }

  const { success: hasValidImgixSubdomain, data: subdomain } = z.string().min(1).safeParse(process.env.NEXT_PUBLIC_IMGIX_SUBDOMAIN)

  if (!hasValidImgixSubdomain) {
    return directusImageLoader({ src, width, quality })
  }

  // Match Directus asset URL: /assets/<uuid> or /assets/<uuid>/<filename>.<ext>
  // The filename segment is optional — getDirectusUrl omits it when filename_download is null.
  // The filename part may contain percent-encoded characters.
  const matches = src.match(/\/assets\/([\w-]+)(?:\/[\w%.-]+\.(\w+))?/)
  if (matches === null) {
    return directusImageLoader({ src, width, quality })
  }

  const [, assetId, extension] = matches

  let directusParams: URLSearchParams
  try {
    directusParams = new URL(src).searchParams
  }
  catch {
    return directusImageLoader({ src, width, quality })
  }

  const imgixPath = extension != null ? `${assetId}.${extension}` : assetId
  const imgixUrl = new URL(`https://${subdomain}.imgix.net/${imgixPath}`)
  const params = imgixUrl.searchParams

  params.set('auto', 'format,compress')

  if (!isEmpty(width))
    params.set('w', width.toString())

  const height = directusParams.get('height')
  if (!isEmpty(height))
    params.set('h', height)

  if (!isEmpty(quality))
    params.set('q', quality.toString())

  const directusFit = directusParams.get('fit')
  if (!isEmpty(directusFit)) {
    const imgixFit = DIRECTUS_FIT_TO_IMGIX[directusFit] ?? directusFit
    params.set('fit', imgixFit)

    // When cropping, default to entropy-based smart crop unless the caller
    // has already specified a crop strategy (e.g. focalpoint).
    if (imgixFit === 'crop' && !params.has('crop')) {
      params.set('crop', 'entropy')
    }
  }

  if (directusParams.get('withoutEnlargement') === 'true') {
    params.set('upscale', 'false')
  }

  return imgixUrl.href
}
