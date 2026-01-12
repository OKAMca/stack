'use client'

import { createCalendar } from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'
import { useRef } from 'react'
import { useRangeCalendar } from 'react-aria'
import { useRangeCalendarState } from 'react-stately'
import Box, { BoxWithForwardRef } from '../Box'
import Typography from '../Typography'
import CalendarGrid from './components/CalendarGrid'
import NavigationButtons from './components/NavigationButtons'
import type { TRangeCalendarProps } from './interface'

function RangeCalendar(props: TRangeCalendarProps) {
  const { buttons, tokens, customTheme, themeName = 'calendar', gridProps, ...rest } = props
  const { locale } = useLocale()
  const state = useRangeCalendarState({
    ...rest,
    locale,
    createCalendar,
  })

  const { isDisabled, isReadOnly, isValueInvalid, isFocused } = state

  const ref = useRef(null)
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useRangeCalendar({ ...rest }, state, ref)

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
      <CalendarGrid {...gridProps} state={state} themeName={themeName} tokens={calendarTokens} />
    </BoxWithForwardRef>
  )
}

export default RangeCalendar
