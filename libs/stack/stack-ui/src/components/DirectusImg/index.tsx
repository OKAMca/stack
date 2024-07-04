import { createPngDataUri } from 'unlazy/thumbhash'
import Img from '../Img'
import type TDirectusImageProps from './interface'

const envImgDomain = process.env.NEXT_PUBLIC_IMG_DOMAIN

const DirectusImg = (props: TDirectusImageProps) => {
  const {
    fit,
    customTheme,
    thumbhash,
    description,
    width,
    height,
    id,
    filenameDownload,
    imgDomain = envImgDomain,
    ...rest
  } = props

  if (!id || !filenameDownload) return null

  if (!imgDomain) {
    console.warn('No image domain was provided')
    return null
  }

  const getDirectusImage = () => {
    try {
      const img = new URL(`/assets/${id}/${filenameDownload}`, `https://${imgDomain}`)
      img.searchParams.set('fit', fit ?? 'contain')
      return img
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error)
      return null
    }
  }

  const directusImageUrl = getDirectusImage()

  if (directusImageUrl == null) {
    return null
  }

  return (
    <Img
      alt={description ?? ''}
      {...(thumbhash ? { blurDataURL: createPngDataUri(thumbhash), placeholder: 'blur' } : {})}
      src={directusImageUrl.href}
      {...rest}
      width={width ?? undefined}
      height={height ?? undefined}
    />
  )
}

export default DirectusImg
