import type { CollectionChildren } from '@react-types/shared'
import type React from 'react'
import type { AriaTabListProps } from 'react-aria'
import type { TabListState } from 'react-stately'

export type TMenuProviderProps = {
  children: React.ReactNode
  tabs: CollectionChildren<object>
  defaultSelectedKey: string
  openBtn?: () => JSX.Element
  closeBtn?: () => JSX.Element
  secondaryOpenBtn?: () => JSX.Element
}

export type IMenuProviderProps = AriaTabListProps<TMenuProviderProps> & TMenuProviderProps

export type TMenuContext = {
  openBtn?: () => JSX.Element
  closeBtn?: () => JSX.Element
  secondaryOpenBtn?: () => JSX.Element
  tabState: TabListState<object>
  defaultSelectedKey: string
}

export type TMenuProps = {
  openBtn?: () => JSX.Element
  closeBtn?: () => JSX.Element
  secondaryOpenBtn?: () => JSX.Element
}
