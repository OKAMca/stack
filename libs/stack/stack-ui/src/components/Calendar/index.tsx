'use client'

/* eslint-disable no-unused-vars */
import { createCalendar } from '@internationalized/date'
import { useCalendar } from '@react-aria/calendar'
import { useLocale } from '@react-aria/i18n'
import { useCalendarState } from '@react-stately/calendar'
import { useRef } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import Box, { BoxWithForwardRef } from '../Box'
import Typography from '../Typography'
import CalendarGrid from './components/CalendarGrid'
import NavigationButtons from './components/NavigationButtons'
import type { TCalendarProps } from './interface'

function Calendar<T extends TToken>({
  buttons,
  tokens,
  customTheme,
  themeName = 'calendar',
  ...rest
}: TCalendarProps<T>) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...rest,
    locale,
    createCalendar,
  })

  const ref = useRef(null)
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar({ ...rest }, state)

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

export default Calendar
