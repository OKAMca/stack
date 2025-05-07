import type { ItemProps, Node, Key } from 'react-stately'
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
