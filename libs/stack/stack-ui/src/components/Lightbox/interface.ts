import type { AriaOverlayProps } from '@react-aria/overlays'
import type { AriaDialogProps } from '@react-types/dialog'
import type { HTMLAttributes } from 'react'
import type React from 'react'
import type { TDefaultComponent } from '../../types/components'

export interface ModalProps {
  children?: React.ReactNode
}

export interface ILightboxProps extends HTMLAttributes<HTMLElement> {
  id: string
  children?: React.ReactNode
  label?: string
  thumbnailContent?: React.ReactNode
  lightboxContent?: React.ReactNode
  isOpen?: boolean
  onOpenCallBack?: (bool: boolean) => void
  onCloseCallBack?: () => void
}

export type LightboxProps = ILightboxProps & TDefaultComponent

export type ModalDialogProps = AriaOverlayProps & AriaDialogProps & ModalProps
