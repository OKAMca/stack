import type React from 'react'
import type { TDefaultComponent } from '../../types/components'

export interface TIconProps extends TDefaultComponent {
  icon?: string | React.ReactNode
  children?: React.ReactNode
}
