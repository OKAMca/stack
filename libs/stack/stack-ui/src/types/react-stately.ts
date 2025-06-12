import type { ItemProps, Node, Key, SectionProps } from 'react-stately'
import type { TToken } from '../providers/Theme/interface'
import type { TDefaultComponent } from './components'

/**
 * Overrides the `Node` type from `react-stately` that allows typing the `props` property.
 *
 * Also forces `TDefaultComponent` to be included in the `props` object.
 */
export interface TDefaultNode<I extends object> extends Omit<Node<I>, 'props'> {
  props?: TDefaultComponent & I
}

/**
 * Overrides the `ItemProps` type from `react-stately` for items with theming support.
 */
export interface TDefaultItemComponent<I extends object = object, T extends TToken = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    ItemProps<I> {
  key: Key
}

/**
 * Overrides the `SectionProps` type from `react-stately` for sections with theming support.
 */
export interface TDefaultSectionComponent<I extends object = object, T extends TToken = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    SectionProps<I> {
  key: Key
}

export type TDefaultCollectionChildComponent<I extends object = object, T extends TToken = TToken> =
  | TDefaultItemComponent<I, T>
  | TDefaultSectionComponent<TDefaultItemComponent<I, T>, T>
