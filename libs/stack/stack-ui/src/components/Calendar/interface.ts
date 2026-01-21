import type { CalendarDate, DateValue } from '@internationalized/date'
import type { AriaCalendarGridProps, CalendarAria, CalendarProps, RangeCalendarProps } from 'react-aria'
import type { CalendarState, RangeCalendarState } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

interface TCalendarButtons {
  buttonPrev?: {
    icon?: string
  }
  buttonNext?: {
    icon?: string
  }
}

interface TBaseCalendarProps<T = TToken> extends TDefaultComponent<T> {
  buttons?: TCalendarButtons
  gridProps?: Omit<TCalendarGridProps, 'state' | keyof TDefaultComponent>
}
export interface TCalendarProps<T = TToken> extends TBaseCalendarProps<T>, CalendarProps<DateValue> {}

export interface TRangeCalendarProps<T = TToken> extends TBaseCalendarProps<T>, RangeCalendarProps<DateValue> {}

export type AriaWeekdayStyle = NonNullable<AriaCalendarGridProps['weekdayStyle']>

export type TWeekdayStyle = AriaWeekdayStyle | 'abbreviated'

export interface TCalendarGridProps extends Omit<AriaCalendarGridProps, 'weekdayStyle'>, TDefaultComponent {
  state: RangeCalendarState | CalendarState
  /**
   * @default 'abbreviated'
   *
   * - narrow: First letter of the weekday
   * - abbreviated: First two letters of the weekday
   * - short: First three letters of the weekday
   * - long: Full weekday name
   */
  weekdayStyle?: TWeekdayStyle
}

export interface TCalendarCellProps extends TDefaultComponent {
  state: RangeCalendarState | CalendarState
  date: CalendarDate
}

export interface TCalendarNavigationButtonsProps
  extends
  TDefaultComponent,
  Pick<TCalendarProps, 'buttons'>,
  Pick<CalendarAria, 'prevButtonProps' | 'nextButtonProps'> {}
