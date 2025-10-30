import type { AriaLabelingProps } from '@react-types/shared'
import type { AriaTabListProps } from '@react-types/tabs'
import type React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { Maybe, TDefaultComponent, TTransition } from '../../types/components'
import type { NextLinkProps } from '../../types/next-link'

export type MenuProps = {
  id: string
  children: React.ReactNode
  beforeTabContent?: React.ReactNode
  afterTabContent?: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PanelTransition?: (props: TTransition) => JSX.Element
}

export type TMenuProps<T = TToken> = AriaTabListProps<MenuProps> & MenuProps & TDefaultComponent<T>

export type TMenuSidePanelProps = TMenuProps & {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TransitionAnimation?: (props: TTransition) => JSX.Element
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

export type TMenuItemProps = IMenuItemProp &
  TDefaultComponent &
  AriaLabelingProps & {
    /**
     * @deprecated Use `aria-label` instead
     */
    ariaLabel?: string
  }

export interface TMenuItemsProps extends TDefaultComponent {
  menuItems?: TMenuItemProps[] | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menuLinkComponent?: React.ElementType<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buttonLinkComponent?: React.ElementType<any>
  children?: React.ReactNode
}

export default TMenuProps
