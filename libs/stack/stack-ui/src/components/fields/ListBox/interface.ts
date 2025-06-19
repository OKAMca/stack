import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { AriaListBoxProps, AriaListBoxSectionProps } from 'react-aria'
import type { ListState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'
import type { TDefaultItemComponent, TDefaultNode } from '../../../types/react-stately'
import type { TAnchorProps } from '../../Button/interface'

export interface TListBoxProps<I extends object = object, T extends TToken = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    AriaListBoxProps<I & TDefaultItemComponent<I, T>> {
  /**
   * @default Anchor
   */
  linkElementType?: ForwardRefExoticComponent<TAnchorProps & RefAttributes<HTMLAnchorElement & HTMLButtonElement>>
}

export interface TListBoxSectionProps<I extends object = object, T extends TToken = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    AriaListBoxSectionProps {
  section: TDefaultNode<I>
  state: ListState<I>
}
