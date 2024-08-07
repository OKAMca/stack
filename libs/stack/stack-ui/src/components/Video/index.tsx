'use client'

import useThemeContext from '../../providers/Theme/hooks'
import type { TVideoProps } from './interface'

const Video = (props: TVideoProps) => {
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
