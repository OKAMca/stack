import type { AriaTabListProps } from '@react-types/tabs'
import type { LinkProps } from 'next/link'
import type React from 'react'
import type { Maybe, TDefaultComponent } from '../../types/components'

export type MenuProps = {
  id: string
  children: React.ReactNode
  beforeTabContent?: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TransitonAnimation: (props: never) => JSX.Element
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PanelTransition: (props: never) => JSX.Element
}

export type TMenuProps = AriaTabListProps<MenuProps> & MenuProps & TDefaultComponent

export type PartialHtmlBaseElement = Omit<Partial<HTMLBaseElement>, 'id' | 'onClick' | 'target' | 'role' | 'children'>

export interface IMenuItemProp {
  childItems?: Maybe<TMenuItemProps[] | null>
  id?: string
  target?: string | null
  path?: string
  label?: string
  nextLinkProps?: LinkProps
  onClick?: () => void
}

export type TMenuItemProps = IMenuItemProp & TDefaultComponent & PartialHtmlBaseElement

export interface TMenuItemsProps extends TDefaultComponent {
  menuItems?: TMenuItemProps[] | null
  children?: React.ReactNode
}

export default TMenuProps
