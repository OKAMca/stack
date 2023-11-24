import type React from 'react'
import type { RefObject } from 'react'
import type { AriaPopoverProps } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'
import type { TDefaultComponent } from '../../../../types/components'

export interface TPopoverProps extends Omit<AriaPopoverProps, 'popoverRef'>, TDefaultComponent {
  children: React.ReactNode
  state: OverlayTriggerState
  variant?: string
  popoverRef?: React.RefObject<HTMLDivElement>
  triggerRef: RefObject<HTMLButtonElement & HTMLAnchorElement>
  matchWidth?: boolean
}
