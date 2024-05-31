import type { DOMAttributes } from '@react-types/shared'
import type React from 'react'
import type { Dispatch, FunctionComponent, SetStateAction } from 'react'
import type { OverlayTriggerProps as AriaOverlayTriggerProps } from 'react-aria'
import type { OverlayTriggerProps } from 'react-stately'
import type { TDefaultComponent, TTransition } from '../../types/components'
import type { TButtonProps } from '../Button/interface'

type TCloseButtonProps =
  | React.ForwardRefExoticComponent<TButtonProps & React.RefAttributes<HTMLButtonElement & HTMLAnchorElement>>
  | FunctionComponent<TButtonProps>

export interface LightboxProps extends TDefaultComponent, OverlayTriggerProps, Omit<AriaOverlayTriggerProps, 'type'> {
  closeButtonAriaLabel?: string
  setOpen?: Dispatch<SetStateAction<boolean>>
  closeButton?: TCloseButtonProps
  transitionComponent?: FunctionComponent<TTransition>
}

export interface TLightboxProps extends LightboxProps {
  label: string
  thumbnailContent: React.ReactNode
}

export interface LightboxAria {
  overlayProps: DOMAttributes & { label?: string }
  labelProps: DOMAttributes
}
