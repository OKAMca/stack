import type { DOMAttributes } from '@react-types/shared'
import type React from 'react'
import type { CSSProperties } from 'react'
import type { Placement } from 'react-aria'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'

export interface TPopoverButtonProps extends TDefaultComponent {
  offset: number
  buttonProps: TButtonProps
  placement: Placement
  children: React.ReactNode
}

export interface IPopoverProps extends TDefaultComponent {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  style?: CSSProperties
}

export type TPopoverProps = DOMAttributes & IPopoverProps

export type PopoverOrientation = 'left' | 'right'
