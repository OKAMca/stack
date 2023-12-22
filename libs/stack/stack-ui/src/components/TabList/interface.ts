/* eslint-disable import/no-unresolved */
import type { TabListState } from '@react-stately/tabs'
import type { Node } from '@react-types/shared'
import type { AriaTabListProps, AriaTabPanelProps } from '@react-types/tabs'
import type React from 'react'

export interface TTab {
  item: Node<object>
  state: TabListState<object>
}

export interface TTabPanel extends AriaTabPanelProps {
  state: TabListState<object>
}

export interface TTabList extends AriaTabListProps<object> {
  label?: React.ReactNode | string
}

export interface TPreviousTabState {
  previousSelectedHash: string
  previousSelectedKey: string
}
