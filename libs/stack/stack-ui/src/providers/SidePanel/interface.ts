import type { DOMProps } from '@react-types/shared'
import type * as React from 'react'
import type { ButtonHTMLAttributes } from 'react'
import type { AriaButtonProps, OverlayTriggerProps as OverlayTriggerPropsAria } from 'react-aria'
import type { OverlayTriggerProps, OverlayTriggerState } from 'react-stately'

export interface TSidePanelProviderProps extends OverlayTriggerProps, Partial<OverlayTriggerPropsAria> {
  children: React.ReactNode
  defaultSelectedKey: string
  /**
   * @deprecated Use `defaultOpen` instead
   */
  defaultIsOpen?: boolean
  /**
   * @deprecated Use `onOpenChange` instead
   */
  onOpenCallback?: () => void
  /**
   * @deprecated Use `onOpenChange` instead
   */
  onCloseCallback?: () => void
}

export type TSidePanelButtonProps = Omit<AriaButtonProps<'button'>, 'onPress'> & {
  handlePress?: AriaButtonProps<'button'>['onPress']
}

export interface TSidePanelButtons {
  closeButtonProps: TSidePanelButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
  closeButtonRef: React.MutableRefObject<null>
  openButtonProps: TSidePanelButtonProps & React.HTMLAttributes<HTMLDivElement>
  openButtonRef: React.MutableRefObject<null>
}

/**
 * @deprecated Use `TSidePanelButtons` instead
 * @example
 * ```tsx
 * import type { TSidePanelButtons } from '@okam/stack-ui'
 * ```
 */
export type TButtonProps = TSidePanelButtons

export interface TSidePanelContext {
  defaultSelectedKey: string
  overlayState: OverlayTriggerState
  buttonProps: TSidePanelButtons
  overlayProps: DOMProps
}
