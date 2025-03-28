/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/naming-convention */
import type { TFiles } from '@okam/directus-next'
import type { Nullable } from '@okam/stack-ui'
import { logger } from '../logger'

const IMG_DOMAIN = process.env.NEXT_PUBLIC_IMG_DOMAIN
const IMG_PORT = process.env.NEXT_PUBLIC_IMG_PORT
const IMG_PROTOCOL = process.env.NEXT_PUBLIC_IMG_PROTOCOL ?? 'https'

function setSearchParams(url: URL, searchParams: Record<string, Nullable<string>>) {
  Object.entries(searchParams).forEach(([key, value]) => {
    if (!value) return
    url.searchParams.set(key, value)
  })
}

function getDirectusUrl(file: Nullable<TFiles>, baseUrl?: URL, searchParams?: Record<string, Nullable<string>>) {
  const { id, filename_download, filenameDownload } = file ?? {}
  const { protocol = IMG_PROTOCOL, port = IMG_PORT, hostname = IMG_DOMAIN } = baseUrl ?? {}

  if (!hostname || !id) return null

  try {
    const url = new URL(`/assets/${id}/${filename_download ?? filenameDownload ?? ''}`, `${protocol}://${hostname}`)
    if (port) url.port = port
    if (searchParams) setSearchParams(url, searchParams)

    return url
  } catch (error) {
    logger.log("Couldn't create URL", 'warn', { error })

    return null
  }
}

export default function useDirectusFile(
  file: Nullable<TFiles>,
  baseUrl?: URL,
  searchParams?: Record<string, Nullable<string>>,
) {
  const { description, width, height, title, id, ...rest } = file ?? {}
  if (!file || !id) return null
  const url = getDirectusUrl(file, baseUrl, searchParams)

  if (!url) return null

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
