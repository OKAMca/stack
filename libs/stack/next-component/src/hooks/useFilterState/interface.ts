import type { Options, ParserBuilder } from 'nuqs'
import type { AriaTagGroupProps } from 'react-aria'

export type TFilterValue = string[]

export interface TFilter extends AriaTagGroupProps<object>, Options {
  id: string
  parser?: ParserBuilder<TFilterValue>
  defaultSelectedKeys?: Exclude<AriaTagGroupProps<object>['defaultSelectedKeys'], 'all'>
}
