import type { TFiles } from '@okam/directus-next'
import type { Nullable } from '@okam/stack-ui'
import { isEmpty, isNullish } from 'radashi'
import { logger } from '../../logger'

const IMG_DOMAIN = process.env.NEXT_PUBLIC_IMG_DOMAIN
const IMG_PORT = process.env.NEXT_PUBLIC_IMG_PORT
const IMG_PROTOCOL = process.env.NEXT_PUBLIC_IMG_PROTOCOL ?? 'https'

export function getDirectusUrl(file: Nullable<TFiles>, baseUrl?: URL, searchParams?: Record<string, Nullable<string>>) {
  const { id, filename_download, filenameDownload } = file ?? {}

  const protocol = !isNullish(baseUrl) ? baseUrl.protocol.replace(/:$/, '') : IMG_PROTOCOL
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

    if (!isNullish(searchParams)) {
      for (const [key, value] of Object.entries(searchParams)) {
        if (value != null && value !== '')
          url.searchParams.set(key, value)
      }
    }

    return url
  }
  catch (error) {
    logger.log('Couldn\'t create URL', 'warn', { error, props: file })
    return null
  }
}

/**
 *
 * @param file Directus file to create the asset URL from
 * @param baseUrl Override Directus asset URL creation. By default, this will be fallbacked to with `NEXT_PUBLIC_IMG_DOMAIN`, `NEXT_PUBLIC_IMG_PORT` and `NEXT_PUBLIC_IMG_PROTOCOL`
 * @param searchParams Additional search params to append to the URL
 * @returns Props ready to be passed to `next/image` `Image` component
 */
export function getDirectusFile(
  file: Nullable<TFiles>,
  baseUrl?: URL,
  searchParams?: Record<string, Nullable<string>>,
) {
  const { description, width, height, title, id, ...rest } = file ?? {}

  if (isEmpty(file) || isEmpty(id))
    return null

  const url = getDirectusUrl(file, baseUrl, searchParams)

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
