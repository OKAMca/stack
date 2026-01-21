import type * as React from 'react'
import type { AriaListBoxOptions, AriaOptionProps } from 'react-aria'
import type { ListState, Node } from 'react-stately'
import type { TDefaultComponent } from '../../../../types/components'

export interface TListBoxProps<T extends object = object> extends AriaListBoxOptions<T>, TDefaultComponent {
  listBoxRef?: React.RefObject<HTMLUListElement>
  state: ListState<T>
  optionsWithHeaders?: { key: string, value: string }[]
}

export interface TOptionProps<T extends object = object> extends AriaOptionProps, TDefaultComponent {
  item: Item<T>
  state: ListState<T>
}

export type Item<T extends object = object> = Pick<Node<T>, 'key' | 'rendered'>

export interface Section<T extends object = object> {
  header?: Item<T>
  items: Item<T>[]
}
