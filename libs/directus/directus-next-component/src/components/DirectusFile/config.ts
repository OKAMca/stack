import type { ComponentType } from '@react-spring/web'
import DirectusImg from '../DirectusImg'
import DirectusVideo from '../DirectusVideo'
import type { DirectusFileProps } from './interface'

const directusFileConfig: Record<string, ComponentType<DirectusFileProps>> = {
  image: DirectusImg,
  video: DirectusVideo,
}

export default directusFileConfig
