import type { TDefaultItemComponent, TToken } from '@okam/stack-ui'
import type { Options, ParserBuilder } from 'nuqs'
import type { AriaTagGroupProps } from 'react-aria'
import type { SelectionMode } from 'react-stately'

export type TFilterValue = string[]

export type TFilterItem<T extends TToken = TToken> = TDefaultItemComponent<never, T>
export interface TFilter extends Omit<AriaTagGroupProps<TFilterItem>, 'selectionMode'> {
  id: string
  /**
   * @default parseAsArrayOf(parseAsString)
   */
  parser?: ParserBuilder<TFilterValue>
  defaultSelectedKeys?: Exclude<AriaTagGroupProps<object>['defaultSelectedKeys'], 'all'>
  options?: Options
  selectionMode?: Exclude<SelectionMode, 'none'>
}
