import type { OverlayTriggerState } from '@react-stately/overlays'
import type { DOMProps } from '@react-types/shared'
import type React from 'react'
import type { OverlayTriggerProps } from 'react-aria'

export type TSidePanelProviderProps = OverlayTriggerProps & {
  children: React.ReactNode
  defaultSelectedKey: string
  defaultIsOpen?: boolean
  onOpenCallback?: () => void
  onCloseCallback?: () => void
}

export type TButtonProps = {
  closeButtonProps: React.ButtonHTMLAttributes<HTMLButtonElement>
  closeButtonRef: React.MutableRefObject<null>
  openButtonProps: React.HTMLAttributes<HTMLDivElement>
  openButtonRef: React.MutableRefObject<null>
}

export type TSidePanelContext = {
  defaultSelectedKey: string
  overlayState: OverlayTriggerState
  buttonProps: TButtonProps
  overlayProps: DOMProps
}
