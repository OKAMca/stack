import type { OverlayTriggerState } from '@react-stately/overlays'
import type React from 'react'
import type { FunctionComponent } from 'react'
import type { AriaDialogProps, AriaModalOverlayProps } from 'react-aria'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'

export interface TModalProps<T = TToken> extends AriaModalOverlayProps, TDefaultComponent<T> {
  state: OverlayTriggerState
  children: React.ReactNode
  transitionComponent?: FunctionComponent<TTransition>
}

export interface TModalOverlayProps extends AriaModalOverlayProps, TDefaultComponent {
  children: React.ReactNode
  state: OverlayTriggerState
}

export interface TModalDialogProps extends AriaDialogProps, TDefaultComponent {
  children: React.ReactNode
}
