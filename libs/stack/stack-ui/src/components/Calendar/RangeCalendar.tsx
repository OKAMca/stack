/* eslint-disable no-unused-vars */
import { createCalendar } from '@internationalized/date'
import { useRangeCalendar } from '@react-aria/calendar'
import { useLocale } from '@react-aria/i18n'
import { useRangeCalendarState } from '@react-stately/calendar'
import { useRef } from 'react'
import Box, { BoxWithForwardRef } from '../Box'
import Typography from '../Typography'
import CalendarGrid from './components/CalendarGrid'
import NavigationButtons from './components/NavigationButtons'
import type { TRangeCalendarProps } from './interface'

function RangeCalendar(props: TRangeCalendarProps) {
  const { buttons, tokens, customTheme, themeName = 'calendar', ...rest } = props
  const { locale } = useLocale()
  const state = useRangeCalendarState({
    ...rest,
    locale,
    createCalendar,
  })

  const ref = useRef(null)
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useRangeCalendar({ ...rest }, state, ref)

  return (
    <BoxWithForwardRef {...calendarProps} ref={ref} themeName={`${themeName}.container`} tokens={tokens}>
      <Box themeName={`${themeName}.header`} tokens={tokens}>
        <Typography as="p" themeName={`${themeName}.title`} tokens={tokens}>
          {title}
        </Typography>
        <NavigationButtons
          themeName={themeName}
          tokens={tokens}
          buttons={buttons}
          prevButtonProps={prevButtonProps}
          nextButtonProps={nextButtonProps}
        />
      </Box>
      <CalendarGrid state={state} />
    </BoxWithForwardRef>
  )
}

export default RangeCalendar
