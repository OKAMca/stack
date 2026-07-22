import type { TFiles } from '@okam/directus-next'
import type { Nullable } from '@okam/stack-ui'
import { isEmpty, isNullish } from 'radashi'
import { logger } from '../../logger'

const IMG_DOMAIN = process.env.NEXT_PUBLIC_IMG_DOMAIN
const IMG_PORT = process.env.NEXT_PUBLIC_IMG_PORT
const IMG_PROTOCOL = process.env.NEXT_PUBLIC_IMG_PROTOCOL ?? 'https'

/**
 * Creates a Directus asset URL from a Directus file.
 *
 * Only maps concerns common to every file type (protocol/host/port, asset path).
 * Image-only transform params (focal point, intrinsic dimensions, fit) are the
 * responsibility of {@link getDirectusImg} and are passed in via `searchParams`.
 * @param file Directus file to create the asset URL from
 * @param baseUrl Override Directus asset URL creation. By default, this falls back to `NEXT_PUBLIC_IMG_DOMAIN`, `NEXT_PUBLIC_IMG_PORT` and `NEXT_PUBLIC_IMG_PROTOCOL`
 * @param searchParams Additional search params to append to the URL
 * @returns Directus asset URL
 */
export function getDirectusUrl(file: Nullable<TFiles>, baseUrl?: URL, searchParams?: URLSearchParams) {
  const { id, filename_download, filenameDownload } = file ?? {}
  const allSearchParams = new URLSearchParams([...(searchParams ?? [])])

  const protocol = (baseUrl?.protocol ?? IMG_PROTOCOL).replace(/:$/, '')
  const hostname = baseUrl?.hostname ?? IMG_DOMAIN
  const port = baseUrl?.port ?? IMG_PORT

  if (isEmpty(hostname) || isEmpty(id)) {
    logger.log('Invalid props or environment variables', 'warn', { hostname, props: file })
    return null
  }

  try {
    const url = new URL(`/assets/${id}/${filename_download ?? filenameDownload ?? ''}`, `${protocol}://${hostname}`)

    if (!isEmpty(port))
      url.port = port
    if (!isEmpty(allSearchParams))
      url.search = allSearchParams.toString()

    return url
  }
  catch (error) {
    logger.log('Couldn\'t create URL', 'warn', { error, props: file })
    return null
  }
}

/**
 * Wrapper for {@link getDirectusUrl} that maps the props common to every Directus
 * file type (image, video, …) into props ready for a rendering component.
 *
 * File-type-specific mapping lives in the dedicated wrappers ({@link getDirectusImg},
 * {@link getDirectusVideo}). `baseUrl` and `searchParams` may be passed either as
 * arguments (which take precedence) or as props on `file`.
 * @param file Directus file to create the asset URL from
 * @param baseUrl Override Directus asset URL creation. By default, this falls back to `NEXT_PUBLIC_IMG_DOMAIN`, `NEXT_PUBLIC_IMG_PORT` and `NEXT_PUBLIC_IMG_PROTOCOL`
 * @param searchParams Additional search params to append to the URL
 * @returns Props ready to be passed to a rendering component
 */
export function getDirectusFile(
  file: Nullable<TFiles & { baseUrl?: URL, searchParams?: URLSearchParams }>,
  baseUrl?: URL,
  searchParams?: URLSearchParams,
) {
  const { description, width, height, title, id, baseUrl: propsBaseUrl, searchParams: propsSearchParams, ...rest } = file ?? {}

  if (isEmpty(file) || isEmpty(id))
    return null

  const url = getDirectusUrl(file, baseUrl ?? propsBaseUrl, searchParams ?? propsSearchParams)

  if (isNullish(url))
    return null

  return {
    src: url.href,
    alt: description ?? '',
    width: width ?? undefined,
    height: height ?? undefined,
    title: title ?? undefined,
    id,
    ...rest,
  }
}

/**
 * @deprecated Use `getDirectusFile` instead
 */
export const useDirectusFile = getDirectusFile
