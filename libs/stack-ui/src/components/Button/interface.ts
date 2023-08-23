import type { PressEvent } from '@react-types/shared'
import type React from 'react'
import type { TDefaultComponent } from '../../types/components'

export interface TButtonProps extends TDefaultComponent {
  children?: React.ReactNode
  id?: string
  href?: string
  disabled?: boolean
  download?: boolean
  target?: string
  rel?: string
  handlePress?: ((e: PressEvent) => void) | undefined
  tabIndex?: number
  role?: string
  isDisabled?: boolean
}
