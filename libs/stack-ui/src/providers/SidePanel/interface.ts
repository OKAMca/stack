import type { OverlayTriggerState } from '@react-stately/overlays'
import type React from 'react'

export type TSidePanelProviderProps = {
  children: React.ReactNode
  defaultSelectedKey: string
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
}
