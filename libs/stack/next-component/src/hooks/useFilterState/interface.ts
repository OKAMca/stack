import type { Options, ParserBuilder } from 'nuqs'
import type { AriaTagGroupProps } from 'react-aria'
import type { ItemProps } from 'react-stately'

export type TFilterValue = string[]

export type TFilterItem = ItemProps<never> & { key: string }

export interface TFilter extends Omit<AriaTagGroupProps<TFilterItem>, 'selectionMode'> {
  id: string
  /**
   * @default parseAsArrayOf(parseAsString)
   */
  parser?: ParserBuilder<TFilterValue>
  defaultSelectedKeys?: Exclude<AriaTagGroupProps<object>['defaultSelectedKeys'], 'all'>
  options?: Options
  selectionMode?: 'multiple' | 'single'
}
