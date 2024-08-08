import type { ComponentType } from 'react-spring'
import DirectusImg from '../DirectusImg'
import DirectusVideo from '../DirectusVideo'
import type { TDirectusFileProps } from './interface'

const directusFileConfig: Record<string, ComponentType<TDirectusFileProps>> = {
  image: DirectusImg,
  video: DirectusVideo,
}

export default directusFileConfig
