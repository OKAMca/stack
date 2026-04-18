import type { ImageLoaderProps } from 'next/image'
import { isEmpty } from 'radashi'
import { z } from 'zod'
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
 * Translates `fit` and focal-point params from a Directus URL to imgix equivalents.
 * Extracted to keep the main loader flat — early returns replace nested conditionals.
 */
function applyFitParams(params: URLSearchParams, directusParams: URLSearchParams, width: number): void {
  const directusFit = directusParams.get('fit')
  if (isEmpty(directusFit))
    return

  const imgixFit = DIRECTUS_FIT_TO_IMGIX[directusFit] ?? directusFit
  params.set('fit', imgixFit)

  if (imgixFit !== 'crop')
    return

  const fpXPx = Number(directusParams.get('focal_point_x'))
  const fpYPx = Number(directusParams.get('focal_point_y'))
  const height = Number(directusParams.get('height'))

  if ([fpXPx, fpYPx, width, height].some(value => !Number.isFinite(value) || value <= 0)) {
    params.set('crop', 'entropy')
    return
  }

  params.set('crop', 'focalpoint')
  params.set('fp-x', (fpXPx / width).toString())
  params.set('fp-y', (fpYPx / height).toString())
}

/**
 * Next.js image loader that serves Directus assets through imgix.
 *
 * When `NEXT_PUBLIC_IMGIX_SUBDOMAIN` is set, the loader:
 * 1. Extracts the asset ID and extension from the Directus asset URL.
 * 2. Translates `fit`, `height`, `withoutEnlargement`, and focal-point params to their imgix equivalents.
 * 3. Applies `width` and `quality` from Next.js loader props.
 *
 * Falls back to `directusImageLoader` when the env var is absent, the URL does
 * not match the expected Directus asset pattern, or URL parsing fails.
 *
 * Static transformation params (`fit`, `height`, `withoutEnlargement`, focal point)
 * must already be set on the `src` URL before the loader runs (e.g. via `getDirectusFile`).
 *
 * @param {string} props.src Image source. The following imgix parameters will be set:
 * - `auto`: `'format,compress'`
 * - `w`: `width` prop (Next.js breakpoint)
 * - `h`: `height` URL parameter
 * - `q`: `quality` prop
 * - `fit`: `fit` URL parameter, translated from Directus to imgix values
 * - `crop` / `fp-x` / `fp-y`: only when `fit=cover` — `focalpoint` + normalised coords when focal-point data is present, otherwise `entropy`
 * - `upscale`: `false` when `withoutEnlargement=true` is in the URL
 */
export default function imgixImageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (src.startsWith('/_next/') || src.startsWith('/')) {
    return src
  }

  const { success: hasValidImgixSubdomain, data: subdomain } = z.string().min(1).safeParse(process.env.NEXT_PUBLIC_IMGIX_SUBDOMAIN)
  if (!hasValidImgixSubdomain) {
    return directusImageLoader({ src, width, quality })
  }

  let directusUrl: URL
  try {
    directusUrl = new URL(src)
  }
  catch {
    return directusImageLoader({ src, width, quality })
  }

  const directusParams = directusUrl.searchParams

  // Match Directus asset URL: /assets/<uuid> or /assets/<uuid>/<filename>.<ext>
  // The filename segment is optional — getDirectusUrl omits it when filename_download is null.
  // The filename part may contain percent-encoded characters.
  const matches = directusUrl.pathname.match(/\/assets\/([\w-]+)(?:\/[\w%.-]+\.(\w+))?/)
  if (matches === null) {
    return directusImageLoader({ src, width, quality })
  }

  const [, assetId, extension] = matches
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

  applyFitParams(params, directusParams, width)

  if (directusParams.get('withoutEnlargement') === 'true')
    params.set('upscale', 'false')

  return imgixUrl.href
}
