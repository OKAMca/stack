import type { CollectionElement, ItemProps, Node } from '@react-types/shared'
import type { ReactElement } from 'react'
import type { AriaTagGroupProps, AriaTagProps } from 'react-aria'
import type { ListState } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'

type TTagCollectionElement<I extends object> = CollectionElement<I> & { removeButtonProps?: TButtonProps }

export type TTagItem<I extends object> = I & {
  removeButtonProps?: TButtonProps
  href?: string
}

type TTagNode<I extends object> = Omit<Node<I>, 'props'> & { props?: TTagItem<I> & ItemProps<I> }

export interface TTagGroupProps<I extends object, T = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    Omit<AriaTagGroupProps<TTagItem<I>>, 'children'> {
  children: TTagCollectionElement<I> | TTagCollectionElement<I>[] | ((item: TTagItem<I>) => TTagCollectionElement<I>)
  /**
   * Acts as a default for the remove button of all tags. Individual tags `props.item.props.removeButtonProps` take precedence.
   * @default {children: '❌'}
   */
  removeButtonProps?: TButtonProps
}

export interface TTagProps<I extends object, T = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    Omit<AriaTagProps<TTagItem<I>>, 'item'> {
  state: ListState<TTagItem<I>>
  item: TTagNode<I>
}

export type TTagItemProps<I extends object, T = TToken> = Omit<TDefaultComponent<T>, 'children'> &
  ItemProps<I> &
  TTagItem<I>

export type TTagElement<I extends object> = ReactElement<TTagItemProps<I>>
