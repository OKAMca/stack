import type { DOMAttributes } from '@react-types/shared'
import type React from 'react'
import type { Dispatch, FunctionComponent, SetStateAction } from 'react'
import type { OverlayTriggerProps as AriaOverlayTriggerProps } from 'react-aria'
import type { OverlayTriggerProps } from 'react-stately'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'

export interface LightboxProps extends Omit<AriaOverlayTriggerProps, 'type'> {
  closeButtonAriaLabel?: string
  setOpen?: Dispatch<SetStateAction<boolean>>
}

export interface TLightboxProps extends OverlayTriggerProps, LightboxProps, TDefaultComponent {
  label: string
  thumbnailContent: React.ReactNode
  closeButton?: FunctionComponent<TButtonProps>
}

export interface LightboxAria {
  overlayProps: DOMAttributes & { label?: string }
  labelProps: DOMAttributes
}
