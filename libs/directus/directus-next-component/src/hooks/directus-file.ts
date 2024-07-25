/* eslint-disable @typescript-eslint/naming-convention */
import type { Nullable } from '@okam/stack-ui'
import type { TFiles } from '../types/files'

const IMG_DOMAIN = process.env.NEXT_PUBLIC_IMG_DOMAIN
const IMG_PORT = process.env.NEXT_PUBLIC_IMG_PORT
const IMG_PROTOCOL = process.env.NEXT_PUBLIC_IMG_PROTOCOL

function getDirectusUrl(file: Nullable<TFiles>, baseUrl?: URL) {
  const { id, filename_download, filenameDownload } = file ?? {}
  const { protocol = IMG_PROTOCOL, port = IMG_PORT, hostname = IMG_DOMAIN } = baseUrl ?? {}

  if (!hostname || !id) return null

  try {
    const url = new URL(
      `/assets/${id}/${filename_download ?? filenameDownload ?? ''}`,
      `${protocol ?? 'https'}://${hostname}${port ? `:${port}` : ''}`,
    )
    // img.searchParams.set('fit', fit ?? 'contain')
    return url
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    return null
  }
}

export default function useDirectusFile(file: Nullable<TFiles>, baseUrl?: URL) {
  if (!file) return null
  const url = getDirectusUrl(file, baseUrl)

  return url
}
