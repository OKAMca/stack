import type { AriaTagGroupProps, AriaTagProps } from 'react-aria'
import type { ListState } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TTagProps<Item, T = TToken> extends AriaTagProps<Item>, TDefaultComponent<T> {
  state: ListState<Item>
}

export interface TTagGroupProps<Item extends object, T = TToken>
  extends AriaTagGroupProps<Item>,
    Omit<TDefaultComponent<T>, 'children'> {}
