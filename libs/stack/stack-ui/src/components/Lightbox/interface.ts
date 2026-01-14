import type { DOMAttributes } from '@react-types/shared'
import type React from 'react'
import type { Dispatch, FunctionComponent, SetStateAction } from 'react'
import type { OverlayTriggerProps as AriaOverlayTriggerProps } from 'react-aria'
import type { OverlayTriggerProps } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'
import type { TButtonProps } from '../Button/interface'

type TCloseButtonProps =
  | React.ForwardRefExoticComponent<TButtonProps & React.RefAttributes<HTMLButtonElement & HTMLAnchorElement>>
  | FunctionComponent<TButtonProps>

export interface LightboxProps<T = TToken>
  extends TDefaultComponent<T>, OverlayTriggerProps, Omit<AriaOverlayTriggerProps, 'type'> {
  closeButtonAriaLabel?: string
  setOpen?: Dispatch<SetStateAction<boolean>>
  closeButton?: TCloseButtonProps
  transitionComponent?: FunctionComponent<TTransition>
  showTriggerButton?: boolean
  showCloseButton?: boolean
}

export interface TLightboxProps<T = TToken> extends LightboxProps<T> {
  label: string
  thumbnailContent: React.ReactNode
}

export interface LightboxAria {
  overlayProps: DOMAttributes & { label?: string }
  labelProps: DOMAttributes
}
