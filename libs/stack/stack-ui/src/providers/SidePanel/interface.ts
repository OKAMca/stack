import type { OverlayTriggerState } from '@react-stately/overlays'
import type { DOMProps } from '@react-types/shared'
import type React from 'react'
import type { ButtonHTMLAttributes } from 'react'
import type { AriaButtonProps, OverlayTriggerProps } from 'react-aria'

export type TSidePanelProviderProps = Partial<OverlayTriggerProps> & {
  children: React.ReactNode
  defaultSelectedKey: string
  defaultIsOpen?: boolean
  onOpenCallback?: () => void
  onCloseCallback?: () => void
}

export type TSidePanelButtonProps = Omit<AriaButtonProps<'button'>, 'onPress'> & {
  handlePress?: AriaButtonProps<'button'>['onPress']
}

export type TSidePanelButtons = {
  closeButtonProps: TSidePanelButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
  closeButtonRef: React.MutableRefObject<null>
  openButtonProps: TSidePanelButtonProps & React.HTMLAttributes<HTMLDivElement>
  openButtonRef: React.MutableRefObject<null>
}

export type TSidePanelContext = {
  defaultSelectedKey: string
  overlayState: OverlayTriggerState
  buttonProps: TSidePanelButtons
  overlayProps: DOMProps
}
