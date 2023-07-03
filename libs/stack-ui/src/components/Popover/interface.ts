import type { DOMAttributes } from '@react-types/shared'
import type React from 'react'
import type { CSSProperties } from 'react'

export interface IPopoverProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  style?: CSSProperties
}

export type TPopoverProps = DOMAttributes & IPopoverProps

export type PopoverOrientation = 'left' | 'right'
