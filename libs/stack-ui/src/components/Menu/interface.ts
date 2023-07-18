import type { AriaMenuProps } from '@react-types/menu'
import type { Node } from '@react-types/shared'
import type React from 'react'
import type { AriaMenuItemProps, AriaMenuSectionProps, AriaMenuOptions } from 'react-aria'
import type { MenuTriggerProps, OverlayTriggerState, TreeState } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface IMenuProps<T extends object> extends AriaMenuOptions<T>, Omit<TDefaultComponent, 'children'> {
  popoverState: OverlayTriggerState
  dismissButton?: {
    buttonContent?: string | React.ReactNode
    buttonTokens?: TToken
  }
}

export interface IMenuButtonProps<T extends object>
  extends AriaMenuProps<T>,
    MenuTriggerProps,
    Omit<TDefaultComponent, 'children'> {
  dismissButton?: {
    buttonContent?: string | React.ReactNode
    buttonTokens?: TToken
  }
  buttonOptions?: {
    buttonContent?: string | React.ReactNode
    buttonTokens?: TToken
  }
  placement?: 'right' | 'left' | 'top' | 'bottom'
}

export interface IMenuItemProps extends AriaMenuItemProps, TDefaultComponent {
  item: Node<AriaMenuItemProps>
  state: TreeState<AriaMenuItemProps>
}

export interface IMenuSectionProps extends AriaMenuSectionProps, TDefaultComponent {
  section: Node<AriaMenuSectionProps>
  state: TreeState<AriaMenuSectionProps>
}
