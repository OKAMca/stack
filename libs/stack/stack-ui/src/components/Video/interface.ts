import type { VideoHTMLAttributes } from 'react'
import type { TDefaultComponent } from '../../types/components'

export interface TVideoProps extends TDefaultComponent, VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  type?: string
}
