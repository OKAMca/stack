import type { CollectionChildren } from '@react-types/shared'
import type { JSX, ReactNode } from 'react'
import type { AriaTabListProps } from 'react-aria'
import type { TabListState } from 'react-stately'

export interface TMenuProviderProps {
  children: ReactNode
  tabs?: CollectionChildren<object>
  defaultSelectedKey: string
  defaultIsOpen?: boolean
  onCloseCallback?: () => void
  onOpenCallback?: () => void
  openBtn?: () => JSX.Element
  closeBtn?: () => JSX.Element
  secondaryOpenBtn?: () => JSX.Element
}

export type IMenuProviderProps = AriaTabListProps<TMenuProviderProps> & TMenuProviderProps

export interface TMenuContext {
  openBtn?: () => JSX.Element
  closeBtn?: () => JSX.Element
  secondaryOpenBtn?: () => JSX.Element
  tabState: TabListState<object>
  defaultSelectedKey: string
}

export interface TMenuProps {
  openBtn?: () => JSX.Element
  closeBtn?: () => JSX.Element
  secondaryOpenBtn?: () => JSX.Element
}
