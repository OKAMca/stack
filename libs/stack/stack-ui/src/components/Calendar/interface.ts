/* eslint-disable no-unused-vars */
import type { CalendarDate, DateValue } from '@internationalized/date'
import type { CalendarAria, CalendarProps, RangeCalendarProps } from '@react-aria/calendar'
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar'
import type { AriaCalendarGridProps } from 'react-aria'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TCalendarProps<T = TToken> extends CalendarProps<DateValue>, TDefaultComponent<T> {
  buttons?: {
    buttonPrev?: {
      icon?: string
    }
    buttonNext?: {
      icon?: string
    }
  }
}

export interface TRangeCalendarProps extends RangeCalendarProps<DateValue>, TDefaultComponent {
  buttons?: {
    buttonPrev?: {
      icon?: string
    }
    buttonNext?: {
      icon?: string
    }
  }
}

export interface TCalendarGridProps extends AriaCalendarGridProps, TDefaultComponent {
  state: RangeCalendarState | CalendarState
}

export interface TCalendarCellProps extends TDefaultComponent {
  state: RangeCalendarState | CalendarState
  date: CalendarDate
}

export interface TCalendarNavigationButtonsProps
  extends TDefaultComponent,
    Pick<TCalendarProps, 'buttons'>,
    Pick<CalendarAria, 'prevButtonProps' | 'nextButtonProps'> {}
