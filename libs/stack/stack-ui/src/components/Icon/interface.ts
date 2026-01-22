import type { ReactNode, SVGProps } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TIconProps<T = TToken> extends TDefaultComponent<T>, SVGProps<SVGSVGElement> {
  icon?: string | ReactNode
  children?: ReactNode
}
