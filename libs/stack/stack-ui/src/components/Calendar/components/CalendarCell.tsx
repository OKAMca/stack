import { isSameDay, getDayOfWeek } from '@internationalized/date'
import { useCalendarCell } from '@react-aria/calendar'
import { useFocusRing } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import type { RangeCalendarState } from '@react-stately/calendar'
import { useRef } from 'react'
import { useLocale } from 'react-aria'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TCalendarCellProps } from '../interface'

function CalendarCell({ themeName = 'calendar', tokens, state, date }: TCalendarCellProps) {
  const ref = useRef(null)
  const { cellProps, buttonProps, isSelected, isOutsideVisibleRange, isDisabled, formattedDate, isInvalid } =
    useCalendarCell({ date }, state, ref)

  // The start and end date of the selected range will have
  // an emphasized appearance.

  const range = (state as RangeCalendarState)?.highlightedRange
  const startDate = range?.start
  const endDate = range?.end

  const isSelectionStart = range && startDate ? isSameDay(date, startDate) : isSelected
  const isSelectionEnd = range && endDate ? isSameDay(date, endDate) : isSelected

  const { locale } = useLocale()
  const dayOfWeek = getDayOfWeek(date, locale)
  const isRoundedLeft = isSelected && (isSelectionStart || dayOfWeek === 0 || date.day === 1)
  const isRoundedRight =
    isSelected && (isSelectionEnd || dayOfWeek === 6 || date.day === date.calendar.getDaysInMonth(date))

  const { focusProps, isFocusVisible } = useFocusRing()

  const cellContainerTheme = useThemeContext(`${themeName}.cellContainer`, { ...tokens, isFocusVisible })
  const cellTheme = useThemeContext(`${themeName}.cell`, {
    ...tokens,
    isSelected,
    isInvalid,
    isDisabled,
    isRoundedLeft,
    isRoundedRight,
  })
  const cellDate = useThemeContext(`${themeName}.cellDate`, {
    ...tokens,
    isSelected,
    isInvalid,
    isDisabled,
    isSelectionStart,
    isSelectionEnd,
  })

  return (
    <td {...cellProps} aria-disabled={false} className={cellContainerTheme}>
      <div {...mergeProps(buttonProps, focusProps)} ref={ref} hidden={isOutsideVisibleRange} className={cellTheme}>
        <div className={cellDate}>{formattedDate}</div>
      </div>
    </td>
  )
}

export default CalendarCell
