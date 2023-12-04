import type { DOMAttributes } from '@react-types/shared'
import type React from 'react'
import type { Placement } from 'react-aria'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'

export interface IPopoverProps extends TDefaultComponent {
  isOpen?: boolean
  onClose?: () => void
  children: React.ReactElement | React.ReactElement[]
  positionProps?: DOMAttributes
  isDismissable?: boolean
  shouldCloseOnBlur?: boolean
}

export interface TPopoverButtonProps extends TDefaultComponent, IPopoverProps {
  offset?: number
  buttonProps: TButtonProps
  placement?: Placement
  children: React.ReactElement | React.ReactElement[]
}

export type TPopoverProps = DOMAttributes & IPopoverProps

export type PopoverOrientation = 'left' | 'right'
