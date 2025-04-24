import { isSameDay, getDayOfWeek } from '@internationalized/date'
import { useCalendarCell } from '@react-aria/calendar'
import { useFocusRing } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import type { RangeCalendarState } from '@react-stately/calendar'
import { useRef } from 'react'
import { useLocale } from 'react-aria'
import Box, { BoxWithForwardRef } from '../../Box'
import type { TCalendarCellProps } from '../interface'

function CalendarCell(props: TCalendarCellProps) {
  const { themeName = 'calendar', tokens, state, date } = props
  const ref = useRef(null)
  const {
    isUnavailable,
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    formattedDate,
    isInvalid,
  } = useCalendarCell(props, state, ref)

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

  const calendarCellTokens = {
    ...tokens,
    isInvalid,
    isDisabled,
    isUnavailable,
    isSelected,
    isFocusVisible,
  }

  return (
    <Box
      as="td"
      {...cellProps}
      aria-disabled={false}
      themeName={`${themeName}.cellContainer`}
      tokens={calendarCellTokens}
    >
      <BoxWithForwardRef
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        aria-hidden={isOutsideVisibleRange}
        themeName={`${themeName}.cell`}
        tokens={{ ...calendarCellTokens, isRoundedLeft, isRoundedRight }}
      >
        <Box themeName={`${themeName}.cellDate`} tokens={{ ...calendarCellTokens, isSelectionStart, isSelectionEnd }}>
          {formattedDate}
        </Box>
      </BoxWithForwardRef>
    </Box>
  )
}

export default CalendarCell
