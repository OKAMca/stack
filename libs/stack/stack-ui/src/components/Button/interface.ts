import type { PressEvent } from '@react-types/shared'
import type { LinkProps } from 'next/link'
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
  type?: 'submit' | 'button' | 'reset'
}

export interface TAnchorPropsProps extends TButtonProps {
  nextLinkProps?: LinkProps
}
