/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { getWeeksInMonth } from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'
import { useCalendarGrid } from 'react-aria'
import Box from '../../Box'
import type { TCalendarGridProps } from '../interface'
import { getIsDateOutsideRange } from '../utils/getIsDateOutsideRange'
import CalendarCell from './CalendarCell'

function CalendarGrid({ themeName = 'calendar', customTheme, tokens, state, ...rest }: TCalendarGridProps) {
  const { locale } = useLocale()
  const { gridProps, headerProps } = useCalendarGrid({ ...rest }, state)
  const weekDays = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa']

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <Box as="table" {...gridProps} themeName={`${themeName}.calendarTable`} tokens={tokens}>
      <Box as="thead" themeName={`${themeName}.calendarHeaderContainer`} {...headerProps} tokens={tokens}>
        <Box as="tr" themeName={`${themeName}.calendarHeaderRow`} tokens={tokens}>
          {weekDays.map((day) => (
            <Box as="th" themeName={`${themeName}.calendarDayLabel`} key={`day-${day}`} tokens={tokens}>
              {day}
            </Box>
          ))}
        </Box>
      </Box>
      <Box as="tbody" themeName={`${themeName}.calendarBody`} tokens={tokens}>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <Box as="tr" themeName={`${themeName}.calendarWeekRow`} key={`week-${weekIndex}`} tokens={tokens}>
            {state.getDatesInWeek(weekIndex).map((date, i) => {
              if (!date)
                return (
                  <Box
                    themeName={`${themeName}.calendarCellContainer`}
                    tokens={{ isEmpty: true, ...tokens }}
                    as="td"
                    key={i}
                  />
                )
              const isOutsideRange = getIsDateOutsideRange(date, state)
              return (
                <CalendarCell
                  themeName={themeName}
                  tokens={{ isOutsideRange, ...tokens }}
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
