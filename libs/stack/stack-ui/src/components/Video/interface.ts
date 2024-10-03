import type { VideoHTMLAttributes } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TVideoProps<T = TToken> extends TDefaultComponent<T>, VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  type?: string
}
