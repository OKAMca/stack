import type { TDefaultComponent } from '@okam/stack-ui'
import type { VideoHTMLAttributes } from 'react'
import type { TDirectusFile } from '../DirectusFile/interface'

type TDirectusVideoAttributes = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'height' | 'id' | 'title' | 'width'>

export type TDirectusVideoProps = TDirectusVideoAttributes & TDirectusFile & TDefaultComponent
