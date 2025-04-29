'use client'

import { createCalendar } from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'
import { useRef } from 'react'
import { useCalendar } from 'react-aria'
import { useCalendarState } from 'react-stately'
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
  const { isDisabled, isReadOnly, isValueInvalid, isFocused } = state

  const ref = useRef(null)
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar({ ...rest }, state)

  const calendarTokens = {
    isDisabled,
    isReadOnly,
    isValueInvalid,
    isFocused,
    ...tokens,
  }

  return (
    <BoxWithForwardRef {...calendarProps} ref={ref} themeName={`${themeName}.container`} tokens={calendarTokens}>
      <Box themeName={`${themeName}.header`} tokens={calendarTokens}>
        <Typography as="p" themeName={`${themeName}.title`} tokens={calendarTokens}>
          {title}
        </Typography>
        <NavigationButtons
          themeName={themeName}
          tokens={calendarTokens}
          buttons={buttons}
          prevButtonProps={prevButtonProps}
          nextButtonProps={nextButtonProps}
        />
      </Box>
      <CalendarGrid themeName={themeName} state={state} tokens={calendarTokens} />
    </BoxWithForwardRef>
  )
}

export default Calendar
