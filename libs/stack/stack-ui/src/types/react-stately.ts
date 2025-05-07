import type { ItemProps, Node, Key } from 'react-stately'
import type { TToken } from '../providers/Theme/interface'
import type { TDefaultComponent } from './components'

export interface TDefaultNode<I extends object> extends Omit<Node<I>, 'props'> {
  props?: TDefaultComponent & I
}

export interface TDefaultItemComponent<I extends object = object, T extends TToken = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    ItemProps<I> {
  key: Key
}
