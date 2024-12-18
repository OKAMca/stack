'use client'

import { useThemeContext } from '@okam/stack-ui'
import Image from 'next/image'
import { isValidElement } from 'react'
import type TImgProps from './interface'

const ResolvedImage =
  'default' in Image && isValidElement(Image.default) ? (Image as unknown as { default: typeof Image }).default : Image

const Img = (props: TImgProps) => {
  const { src, width, height, themeName = 'img', tokens, customTheme, ...rest } = props
  const theme = useThemeContext(themeName, tokens, customTheme)

  if (typeof src === 'object') {
    const { blurWidth, blurHeight, width: srcWidth, height: srcHeight, ...withoutBlurDimensions } = src
    const blur = {
      blurwidth: blurWidth,
      blurheight: blurHeight,
    }

    return (
      <ResolvedImage
        className={theme}
        {...withoutBlurDimensions}
        {...rest}
        {...blur}
        width={srcWidth ?? width}
        height={srcHeight ?? height}
      />
    )
  }
  return <Image width={width} height={height} className={theme} src={src} {...rest} />
}

export default Img
