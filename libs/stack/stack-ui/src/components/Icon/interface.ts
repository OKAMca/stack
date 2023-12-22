import type React from 'react'
import type { SVGProps } from 'react'
import type { TDefaultComponent } from '../../types/components'

export interface TIconProps extends TDefaultComponent, SVGProps<SVGSVGElement> {
  icon?: string | React.ReactNode
  children?: React.ReactNode
}
