import type { AriaLabelingProps } from '@react-types/shared'
import type * as React from 'react'
import type { AriaTabListProps } from 'react-aria'
import type { TToken } from '../../providers/Theme/interface'
import type { Maybe, TDefaultComponent, TTransition } from '../../types/components'
import type { NextLinkProps } from '../../types/next-link'

export interface MenuProps {
  id: string
  children: React.ReactNode
  beforeTabContent?: React.ReactNode
  afterTabContent?: React.ReactNode

  PanelTransition?: (_props: TTransition) => React.JSX.Element
}

export type TMenuProps<T = TToken> = AriaTabListProps<MenuProps> & MenuProps & TDefaultComponent<T>

export type TMenuSidePanelProps = TMenuProps & {

  TransitionAnimation?: (_props: TTransition) => React.JSX.Element
}

export type PartialHtmlBaseElement = Omit<Partial<HTMLBaseElement>, 'id' | 'onClick' | 'target' | 'role' | 'children'>

export interface IMenuItemProp {
  childItems?: Maybe<TMenuItemProps[] | null>
  id?: string
  target?: string | null
  path?: string
  label?: string
  nextLinkProps?: NextLinkProps
  as?: React.ElementType
  onClick?: () => void
}

export type TMenuItemProps = IMenuItemProp
  & TDefaultComponent
  & AriaLabelingProps & {
    /**
     * @deprecated Use `aria-label` instead
     */
    ariaLabel?: string
  }

export interface TMenuItemsProps extends TDefaultComponent {
  menuItems?: TMenuItemProps[] | null
  menuLinkComponent?: React.ElementType
  buttonLinkComponent?: React.ElementType
  children?: React.ReactNode
}

export default TMenuProps
