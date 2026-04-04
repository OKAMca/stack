import type { ImageLoaderProps } from 'next/image'
import { isEmpty } from 'radashi'

/**
 * Next.js image loader for Directus assets.
 *
 * Applies `width`, `quality`, and `format=auto` to the Directus asset URL.
 * Any other transformation params (`fit`, `height`, `withoutEnlargement`, `transforms`)
 * should be set directly on the `src` URL before passing to this loader
 * (e.g. via `getDirectusFile` or `getDirectusUrl`).
 */
export default function directusImageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (src.startsWith('/_next/') || src.startsWith('/')) {
    return src
  }

  const url = new URL(src)

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
