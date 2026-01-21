'use client'

import type { TToken } from '../../providers/Theme/interface'
import type { TCalendarProps } from './interface'
import { createCalendar } from '@internationalized/date'
import { useRef } from 'react'
import { useCalendar, useLocale } from 'react-aria'
import { useCalendarState } from 'react-stately'
import { Box, BoxWithForwardRef } from '../Box'
import { Typography } from '../Typography'
import CalendarGrid from './components/CalendarGrid'
import NavigationButtons from './components/NavigationButtons'

function Calendar<T extends TToken>({
  buttons,
  tokens,
  customTheme,
  themeName = 'calendar',
  gridProps,
  value,
  ...rest
}: TCalendarProps<T>) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...rest,
    locale,
    value,
    createCalendar,
  })

  const { isDisabled, isReadOnly, isValueInvalid, isFocused } = state

  const ref = useRef(null)
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar({ ...rest, value }, state)

  const calendarTokens = {
    isDisabled,
    isReadOnly,
    isValueInvalid,
    isFocused,
    ...tokens,
  }

  return (
    <BoxWithForwardRef
      {...calendarProps}
      ref={ref}
      themeName={`${themeName}.container`}
      tokens={calendarTokens}
      customTheme={customTheme}
    >
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
      <CalendarGrid {...gridProps} themeName={themeName} state={state} tokens={calendarTokens} />
    </BoxWithForwardRef>
  )
}

export default Calendar
