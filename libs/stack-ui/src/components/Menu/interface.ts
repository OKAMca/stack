import type { AriaTabListProps } from '@react-types/tabs'
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

export interface MenuItem extends TDefaultComponent {
  id?: Maybe<string | undefined>
  target?: Maybe<string | undefined> | null
  path?: Maybe<string | undefined>
  label?: Maybe<string | undefined>
  frLabel?: Maybe<string | undefined>
  title?: Maybe<string | undefined>
  active?: Maybe<boolean>
  childItems?: Maybe<MenuItem[] | undefined>
  onClick?: () => void
}

export interface TMenuItemsProps extends TDefaultComponent {
  menuItems: Maybe<Maybe<MenuItem>[]> | undefined
  children?: React.ReactNode
}

export default TMenuProps
