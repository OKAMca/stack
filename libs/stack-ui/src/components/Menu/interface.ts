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
}

export type TMenuProps = AriaTabListProps<MenuProps> & MenuProps & TDefaultComponent

export interface IMenuItemProp extends Omit<Partial<HTMLBaseElement>, 'id' | 'onClick' | 'target' | 'role'> {
  childItems?: Maybe<MenuItemProps[] | null>
  id?: string
  target?: string | null
  path?: string
  label?: string
  nextLinkProps?: LinkProps
  onClick?: () => void
}

export type MenuItemProps = IMenuItemProp & TDefaultComponent

export interface TMenuItemsProps extends TDefaultComponent {
  menuItems?: MenuItemProps[] | null
  children?: React.ReactNode
}

export default TMenuProps
