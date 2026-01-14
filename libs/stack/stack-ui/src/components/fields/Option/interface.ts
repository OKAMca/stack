import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { AriaOptionProps } from 'react-aria'
import type { ListState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'
import type { TDefaultNode } from '../../../types/react-stately'
import type { TAnchorProps } from '../../Button/interface'

export interface TOptionProps<I extends object = object, T extends TToken = TToken>
  extends TDefaultComponent<T>, AriaOptionProps {
  state: ListState<I>
  item: TDefaultNode<I>
  /**
   * @default Anchor
   */
  linkElementType?: ForwardRefExoticComponent<TAnchorProps & RefAttributes<HTMLAnchorElement & HTMLButtonElement>>
}
