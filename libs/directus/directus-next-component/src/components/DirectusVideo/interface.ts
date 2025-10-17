import type { VideoHTMLAttributes } from 'react'
import type { DirectusFileProps } from '../DirectusFile/interface'

type TDirectusVideoAttributes = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'height' | 'id' | 'title' | 'width'>

export type TDirectusVideoProps = TDirectusVideoAttributes & DirectusFileProps
