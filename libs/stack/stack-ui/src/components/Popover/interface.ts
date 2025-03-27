import type React from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { AriaPopoverProps } from 'react-aria'
import type { OverlayTriggerProps, OverlayTriggerState } from 'react-stately'
import type { TDefaultComponent } from '../../types/components'

export interface TPopoverContentProps extends Omit<AriaPopoverProps, 'popoverRef' | 'triggerRef'>, TDefaultComponent {
  children: React.ReactNode
  state: OverlayTriggerState
  popoverRef?: React.RefObject<HTMLDivElement>
  triggerRef: React.RefObject<HTMLButtonElement | HTMLAnchorElement>
}

export interface TPopoverProps
  extends Omit<TDefaultComponent, 'children'>,
    OverlayTriggerProps,
    Omit<TPopoverContentProps, 'triggerRef' | 'popoverRef' | 'state'> {
  label: ReactNode
  children: ReactElement
}
