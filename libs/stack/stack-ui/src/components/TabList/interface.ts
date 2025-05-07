/* eslint-disable import/no-unresolved */
import type { ComponentType } from '@react-spring/web'
import type { TabListState } from '@react-stately/tabs'
import type { AriaTabListProps, AriaTabPanelProps, AriaTabProps } from '@react-types/tabs'
import type React from 'react'
import type { ReactElement } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'
import type { TDefaultItemComponent, TDefaultNode } from '../../types/react-stately'

export interface TTabItemProps<I extends object = object, T extends TToken = TToken>
  extends TDefaultItemComponent<I, T> {}

export type TTabElement<I extends object = object> = ReactElement<TTabItemProps<I>>

export interface TTabProps<I extends object = object, T extends TToken = TToken>
  extends AriaTabProps,
    TDefaultComponent<T> {
  item: TDefaultNode<I>
  state: TabListState<I & TDefaultItemComponent>
}

export interface TTabPanelProps<I extends object = object, T extends TToken = TToken>
  extends AriaTabPanelProps,
    TDefaultComponent<T> {
  state: TabListState<I & TDefaultItemComponent>
  panelTransition?: ComponentType<TTransition>
}

export interface TTabListProps<I extends object = object, T extends TToken = TToken>
  extends AriaTabListProps<I & TDefaultItemComponent>,
    Omit<TDefaultComponent<T>, 'children'> {
  label?: React.ReactNode
  panelTransition?: ComponentType<TTransition>
}
