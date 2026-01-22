import type { FunctionComponent, ReactNode } from 'react'
import type { AriaModalOverlayProps } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'
import type { TDialogAria, TDialogProps } from '../Dialog/interface'

export interface TModalAria extends TDialogAria, AriaModalOverlayProps {}

export interface TModalProps<T = TToken> extends TModalAria, TDefaultComponent<T> {
  state: OverlayTriggerState
  children: ReactNode
  transitionComponent?: FunctionComponent<TTransition>
}

export interface TModalOverlayProps extends AriaModalOverlayProps, TDefaultComponent {
  children: ReactNode
  state: OverlayTriggerState
}

export interface TModalDialogProps extends TDialogProps {}
