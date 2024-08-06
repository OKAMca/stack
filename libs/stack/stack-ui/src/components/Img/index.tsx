'use client'

import Image from 'next/image'
import useThemeContext from '../../providers/Theme/hooks'
import type TImgProps from './interface'

const Img = (props: TImgProps) => {
  const { src, width, height, themeName = 'img', tokens, customTheme, ...rest } = props
  const theme = useThemeContext(themeName, tokens, customTheme)

  // fix bad import since 13.4.8
  const ResolvedImage = 'default' in Image ? (Image as unknown as { default: typeof Image }).default : Image

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
  return <ResolvedImage width={width} height={height} className={theme} src={src} {...rest} />
}

export default Img
