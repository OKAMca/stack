import type { ImageLoaderProps } from 'next/image'
import { isEmpty } from 'radashi'

/**
 * Next.js image loader for Directus assets.
 *
 * Applies the Next.js breakpoint `width`, `quality`, and `format=auto` to the
 * Directus asset URL produced by `getDirectusFile`. Static transformation params
 * (`fit`, focal point, etc.) must already be set on the URL before the loader runs.
 *
 * Also serves as the fallback for `imgixImageLoader` when imgix is not configured.
 */
export default function directusImageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (src.startsWith('/_next/') || src.startsWith('/')) {
    return src
  }

  let url: URL
  try {
    url = new URL(src)
  }
  catch {
    return src
  }

  if (!isEmpty(width))
    url.searchParams.set('width', width.toString())

  if (!isEmpty(quality))
    url.searchParams.set('quality', quality.toString())

  // Default to auto format so the browser receives webp/avif when supported
  if (!url.searchParams.has('format')) {
    url.searchParams.set('format', 'auto')
  }

  return url.href
}
