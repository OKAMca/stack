import type { CollectionChildren } from '@react-types/shared'
import type * as React from 'react'
import type { AriaTabListProps } from 'react-aria'
import type { TabListState } from 'react-stately'

export interface TMenuProviderProps {
  children: React.ReactNode
  tabs?: CollectionChildren<object>
  defaultSelectedKey: string
  defaultIsOpen?: boolean
  onCloseCallback?: () => void
  onOpenCallback?: () => void
  openBtn?: () => React.JSX.Element
  closeBtn?: () => React.JSX.Element
  secondaryOpenBtn?: () => React.JSX.Element
}

export type IMenuProviderProps = AriaTabListProps<TMenuProviderProps> & TMenuProviderProps

export interface TMenuContext {
  openBtn?: () => React.JSX.Element
  closeBtn?: () => React.JSX.Element
  secondaryOpenBtn?: () => React.JSX.Element
  tabState: TabListState<object>
  defaultSelectedKey: string
}

export interface TMenuProps {
  openBtn?: () => React.JSX.Element
  closeBtn?: () => React.JSX.Element
  secondaryOpenBtn?: () => React.JSX.Element
}
