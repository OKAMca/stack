'use client'

import useThemeContext from '../../providers/Theme/hooks'
import type { TToken } from '../../providers/Theme/interface'
import type { TVideoProps } from './interface'

const Video = <T extends TToken>(props: TVideoProps<T>) => {
  const {
    themeName = 'video',
    tokens,
    customTheme,
    controls = true,
    muted = true,
    src,
    width,
    height,
    type,
    ...rest
  } = props
  const theme = useThemeContext(themeName, tokens, customTheme)

  return (
    <video className={theme} muted={muted} controls={controls} width={width} height={height} {...rest}>
      <source src={src} type={type} />
      <track kind="captions" />
    </video>
  )
}

export default Video
