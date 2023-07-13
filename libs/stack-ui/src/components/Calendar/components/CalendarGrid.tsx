/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { getWeeksInMonth } from '@internationalized/date'
import { useCalendarGrid } from '@react-aria/calendar'
import { useLocale } from '@react-aria/i18n'
import useThemeContext from 'libs/stack-ui/src/providers/Theme/hooks'
import type { TCalendarGridProps } from '../interface'
import CalendarCell from './CalendarCell'

function CalendarGrid({ themeName = 'calendar', customTheme, tokens, state, ...rest }: TCalendarGridProps) {
  const { locale } = useLocale()
  const { gridProps, headerProps, weekDays } = useCalendarGrid({ ...rest }, state)

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  const tableTheme = useThemeContext(`${themeName}.calendarTable`, tokens)
  const dayLabelTheme = useThemeContext(`${themeName}.dayLabel`, tokens)

  return (
    <table {...gridProps} cellPadding="0" className={tableTheme}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day) => (
            <th key={`${day}`} className={dayLabelTheme}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) => (date ? <CalendarCell key={date?.day} state={state} date={date} /> : <td key={i} />))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CalendarGrid
