import type { PressEvent } from '@react-types/shared'
import type React from 'react'
import type { TDefaultComponent } from '../../types/components'
import type { NextLinkProps } from '../../types/next-link'

export interface TButtonProps extends TDefaultComponent {
  children?: React.ReactNode
  id?: string
  href?: string
  disabled?: boolean
  download?: boolean | string
  target?: string
  rel?: string
  handlePress?: ((e: PressEvent) => void) | undefined
  tabIndex?: number
  role?: string
  isDisabled?: boolean
}

export interface TAnchorProps extends TButtonProps {
  nextLinkProps?: NextLinkProps
}
