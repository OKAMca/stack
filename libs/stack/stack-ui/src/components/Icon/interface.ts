import type * as React from 'react'
import type { SVGProps } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TIconProps<T = TToken> extends TDefaultComponent<T>, SVGProps<SVGSVGElement> {
  icon?: string | React.ReactNode
  children?: React.ReactNode
}
