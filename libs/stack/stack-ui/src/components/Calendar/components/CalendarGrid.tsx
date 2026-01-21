'use client'

import type { AriaWeekdayStyle, TCalendarGridProps, TWeekdayStyle } from '../interface'
import { useCalendarGrid } from 'react-aria'
import { Box } from '../../Box'
import { getIsDateOutsideRange } from '../utils/getIsDateOutsideRange'
import CalendarCell from './CalendarCell'

const weekdayStyleMap: Record<
  TWeekdayStyle,
  {
    value: AriaWeekdayStyle
    transform?: (_weekdays: string[]) => string[]
  }
> = {
  narrow: {
    value: 'narrow',
  },
  abbreviated: {
    value: 'short',
    transform: weekdays => weekdays.map(day => day.slice(0, 2)),
  },
  short: {
    value: 'short',
  },
  long: {
    value: 'long',
  },
}

function CalendarGrid({
  themeName = 'calendar',
  customTheme,
  tokens,
  state,
  weekdayStyle: weekdayStyleProp = 'abbreviated',
  ...rest
}: TCalendarGridProps) {
  const { value: weekdayStyleAria, transform } = weekdayStyleMap[weekdayStyleProp]
  const calendarGridProps = useCalendarGrid({ ...rest, weekdayStyle: weekdayStyleAria }, state)
  const { gridProps, headerProps, weeksInMonth } = calendarGridProps
  const weekDays = transform?.(calendarGridProps.weekDays) ?? calendarGridProps.weekDays

  return (
    <Box as="table" {...gridProps} themeName={`${themeName}.calendarTable`} tokens={tokens}>
      <Box as="thead" themeName={`${themeName}.calendarHeaderContainer`} {...headerProps} tokens={tokens}>
        <Box as="tr" themeName={`${themeName}.calendarHeaderRow`} tokens={tokens}>
          {weekDays.map(day => (
            <Box as="th" themeName={`${themeName}.calendarDayLabel`} key={`day-${day}`} tokens={tokens}>
              {day}
            </Box>
          ))}
        </Box>
      </Box>
      <Box as="tbody" themeName={`${themeName}.calendarBody`} tokens={tokens}>
        {[...Array.from({ length: weeksInMonth }).keys()].map(weekIndex => (
          <Box as="tr" themeName={`${themeName}.calendarWeekRow`} key={`week-${weekIndex}`} tokens={tokens}>
            {state.getDatesInWeek(weekIndex).map((date, i) => {
              if (date == null) {
                return (
                  <Box
                    themeName={`${themeName}.calendarCellContainer`}
                    tokens={{ isEmpty: true, ...tokens }}
                    as="td"
                    // eslint-disable-next-line react/no-array-index-key -- empty calendar cells have no stable identifier; position-based key is correct
                    key={i}
                  />
                )
              }
              const isOutsideRange = getIsDateOutsideRange(date, state)
              return (
                <CalendarCell
                  themeName={themeName}
                  tokens={{ isOutsideRange, isEmpty: false, ...tokens }}
                  key={date?.day}
                  state={state}
                  date={date}
                />
              )
            })}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default CalendarGrid
