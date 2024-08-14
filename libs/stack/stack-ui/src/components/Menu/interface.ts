import type { AriaTabListProps } from '@react-types/tabs'
import type React from 'react'
import type { Maybe, TDefaultComponent } from '../../types/components'
import type { NextLinkProps } from '../../types/next-link'

export type MenuProps = {
  id: string
  children: React.ReactNode
  beforeTabContent?: React.ReactNode
  afterTabContent?: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PanelTransition?: (props: unknown) => JSX.Element
}

export type TMenuProps = AriaTabListProps<MenuProps> & MenuProps & TDefaultComponent

export type TMenuSidePanelProps = TMenuProps & {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TransitionAnimation?: (props: unknown) => JSX.Element
}

export type PartialHtmlBaseElement = Omit<Partial<HTMLBaseElement>, 'id' | 'onClick' | 'target' | 'role' | 'children'>

export interface IMenuItemProp {
  childItems?: Maybe<TMenuItemProps[] | null>
  id?: string
  target?: string | null
  path?: string
  label?: string
  nextLinkProps?: NextLinkProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<any>
  onClick?: () => void
}

export type TMenuItemProps = IMenuItemProp & TDefaultComponent & PartialHtmlBaseElement

export interface TMenuItemsProps extends TDefaultComponent {
  menuItems?: TMenuItemProps[] | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menuLinkComponent?: React.ElementType<any>
  children?: React.ReactNode
}

export default TMenuProps
