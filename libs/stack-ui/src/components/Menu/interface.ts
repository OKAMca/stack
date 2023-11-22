import { type } from 'os'
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

export interface IMenuItemProp extends Omit<HTMLAnchorElement, 'id' | 'onClick' | 'target'> {
  childItems?: Maybe<MenuItemProps[] | undefined>
  id?: Maybe<string | undefined>
  target?: Maybe<string | undefined> | null
  path?: Maybe<string | undefined>
  label?: Maybe<string | undefined>
  nextLinkProps?: LinkProps
  onClick?: () => void
}

export type MenuItemProps = IMenuItemProp & TDefaultComponent

export interface TMenuItemsProps extends TDefaultComponent {
  menuItems: Maybe<Maybe<MenuItemProps>[]> | undefined
  children?: React.ReactNode
}

export default TMenuProps
