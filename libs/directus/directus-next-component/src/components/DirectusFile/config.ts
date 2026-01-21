import type { ComponentType } from '@react-spring/web'
import type { TDirectusFileProps } from './interface'
import DirectusImg from '../DirectusImg'
import DirectusVideo from '../DirectusVideo'

const directusFileConfig: Record<string, ComponentType<TDirectusFileProps>> = {
  image: DirectusImg,
  video: DirectusVideo,
}

export default directusFileConfig
