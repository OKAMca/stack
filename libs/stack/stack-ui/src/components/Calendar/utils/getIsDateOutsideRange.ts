import type { DateValue } from 'react-aria'
import type { CalendarState, RangeCalendarState } from 'react-stately'
import type { Nullable } from '../../../types/components'

export function getIsDateOutsideRange(date: Nullable<DateValue>, state: CalendarState | RangeCalendarState) {
  if (!date) return false
  const { minValue, maxValue } = state
  return !!((minValue && date.compare(minValue) < 0) || (maxValue && date.compare(maxValue) > 0))
}
