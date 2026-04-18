import type { TFiles } from '@okam/directus-next'
import type { Nullable } from '@okam/stack-ui'
import { isEmpty } from 'radashi'
import { logger } from '../../logger'

const IMG_DOMAIN = process.env.NEXT_PUBLIC_IMG_DOMAIN
const IMG_PORT = process.env.NEXT_PUBLIC_IMG_PORT
const IMG_PROTOCOL = process.env.NEXT_PUBLIC_IMG_PROTOCOL ?? 'https'

export function getDirectusUrl(file: Nullable<TFiles>, baseUrl?: URL, searchParams?: URLSearchParams) {
  const { id, filename_download, filenameDownload, focal_point_x: focalPointX, focal_point_y: focalPointY, width, height } = file ?? {}
  const { protocol = IMG_PROTOCOL, port = IMG_PORT, hostname = IMG_DOMAIN } = baseUrl ?? {}
  const defaultSearchParams = new URLSearchParams(([['focal_point_x', focalPointX], ['focal_point_y', focalPointY], ['width', width], ['height', height]] as const).flatMap(([key, value]) => (value != null ? [[key, value.toString()]] : [])))
  const allSearchParams = new URLSearchParams([...defaultSearchParams, ...(searchParams ?? [])])

  if (hostname == null || hostname === '' || id == null || id === '')
    return null

  try {
    const url = new URL(`/assets/${id}/${filename_download ?? filenameDownload ?? ''}`, `${protocol}://${hostname}`)
    if (port != null && port !== '')
      url.port = port
    if (!isEmpty(allSearchParams))
      url.search = allSearchParams.toString()

    return url
  }
  catch (error) {
    logger.log('Couldn\'t create URL', 'warn', { error })

    return null
  }
}

export function getDirectusFile(
  file: Nullable<TFiles>,
  baseUrl?: URL,
  searchParams?: URLSearchParams,
) {
  const { description, width, height, title, id, ...rest } = file ?? {}
  if (file == null || id == null || id === '')
    return null
  const url = getDirectusUrl(file, baseUrl, searchParams)

  if (url == null)
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
