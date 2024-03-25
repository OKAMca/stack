import type { OverlayTriggerState } from '@react-stately/overlays'
import type React from 'react'
import type { AriaDialogProps, AriaModalOverlayProps } from 'react-aria'
import type { TDefaultComponent } from '../../types/components'

export interface TModalProps extends AriaModalOverlayProps, TDefaultComponent {
  state: OverlayTriggerState
  children: React.ReactNode
  transitionComponent?: (props: { isVisible: boolean; children: React.ReactNode }) => JSX.Element
}

export interface TModalOverlayProps extends AriaModalOverlayProps, TDefaultComponent {
  children: React.ReactNode
  state: OverlayTriggerState
}

export interface TModalDialogProps extends AriaDialogProps, TDefaultComponent {
  children: React.ReactNode
}
