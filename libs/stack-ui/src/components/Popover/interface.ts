import type { DOMAttributes } from '@react-types/shared'
import type React from 'react'
import type { CSSProperties } from 'react'
import type { AriaPopoverProps } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'

export interface IPopoverProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  style?: CSSProperties
}

export type TPopoverProps = DOMAttributes & IPopoverProps

export type PopoverOrientation = 'left' | 'right'

export interface IBasePopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode
  state: OverlayTriggerState
}
