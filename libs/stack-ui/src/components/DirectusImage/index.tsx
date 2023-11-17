'use client'

import { useThemeContext } from '@okam/stack-ui'
import Image from 'next/image'
import { createPngDataUri } from 'unlazy/thumbhash'
import type { TImgProps } from './interface'

const imgDomain = process.env.NEXT_PUBLIC_IMG_DOMAIN ?? ''

export const Img = (props: TImgProps) => {
  const { fit, customTheme, themeName = 'img', tokens, thumbhash, description } = props

  const imgTheme = useThemeContext(`${themeName}`, tokens, customTheme)

  if ('id' in props && 'filenameDownload' in props) {
    const { id, filenameDownload, width, height, ...rest } = props
    const directusImageUrl = new URL(`/assets/${id}/${filenameDownload}`, `https://${imgDomain}`)
    directusImageUrl.searchParams.set('fit', fit ?? 'contain')

    return (
      <Image
        className={`${imgTheme}`}
        alt={description ?? ''}
        {...(thumbhash ? { blurDataURL: createPngDataUri(thumbhash), placeholder: 'blur' } : {})}
        src={directusImageUrl.href}
        {...rest}
        width={width ?? undefined}
        height={height ?? undefined}
      />
    )
  }

  if ('src' in props) {
    const { src, width, height, ...rest } = props
    if (typeof src === 'object') {
      const { blurWidth, blurHeight, width: srcWidth, height: srcHeight, ...withoutBlurDimensions } = src
      const blur = {
        blurwidth: blurWidth,
        blurheight: blurHeight,
      }

      return (
        <Image
          className={`${imgTheme}`}
          alt={description ?? ''}
          {...withoutBlurDimensions}
          {...rest}
          {...blur}
          width={srcWidth ?? width}
          height={srcHeight ?? height}
        />
      )
    }
    return (
      <Image
        width={width ?? undefined}
        height={height ?? undefined}
        className={`${imgTheme}`}
        alt={description ?? ''}
        src={src}
        {...rest}
      />
    )
  }

  // eslint-disable-next-line no-console
  console.warn('No id and filename or src was provided to the Img component')
  return null
}

export default Img
