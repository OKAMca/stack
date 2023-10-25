/* eslint-disable no-unused-vars */
import type { CalendarDate, DateValue } from '@internationalized/date'
import type { CalendarProps, RangeCalendarProps } from '@react-aria/calendar'
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar'
import type { AriaCalendarGridProps } from 'react-aria'
import type { TDefaultComponent } from '../../types/components'

export interface TCalendarProps extends CalendarProps<DateValue>, TDefaultComponent {
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
