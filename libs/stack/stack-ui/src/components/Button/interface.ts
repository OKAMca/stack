import type { PressEvent } from '@react-types/shared'
import type React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'
import type { NextLinkProps } from '../../types/next-link'

export interface TButtonProps<T = TToken> extends TDefaultComponent<T> {
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

export interface TAnchorProps<T = TToken> extends TButtonProps<T> {
  nextLinkProps?: NextLinkProps
}
