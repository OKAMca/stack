import useThemeContext from 'libs/stack/stack-ui/src/providers/Theme/hooks'
import Image from 'next/image'
import type TImgProps from './interface'

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
      <Image
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
