import type { DOMProps } from '@react-types/shared'
import type { ButtonHTMLAttributes, HTMLAttributes, MutableRefObject, ReactNode } from 'react'
import type { AriaButtonProps, OverlayTriggerProps as OverlayTriggerPropsAria } from 'react-aria'
import type { OverlayTriggerProps, OverlayTriggerState } from 'react-stately'

export interface TSidePanelProviderProps extends OverlayTriggerProps, Partial<OverlayTriggerPropsAria> {
  children: ReactNode
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
  closeButtonRef: MutableRefObject<null>
  openButtonProps: TSidePanelButtonProps & HTMLAttributes<HTMLDivElement>
  openButtonRef: MutableRefObject<null>
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
