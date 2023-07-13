/* eslint-disable no-unused-vars */
import { createCalendar } from '@internationalized/date'
import { useCalendar } from '@react-aria/calendar'
import { useLocale } from '@react-aria/i18n'
import { useCalendarState } from '@react-stately/calendar'
import { useRef } from 'react'
import useThemeContext from '../../providers/Theme/hooks'
import Button from '../Button'
import Icon from '../Icon'
import Typography from '../Typography'
import CalendarGrid from './components/CalendarGrid'
import type { TCalendarProps } from './interface'

function Calendar({ buttons, tokens, customTheme, themeName = 'calendar', ...rest }: TCalendarProps) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...rest,
    locale,
    createCalendar,
  })

  const ref = useRef(null)
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar({ ...rest }, state)

  const containerTheme = useThemeContext(`${themeName}.container`, tokens)
  const headerTheme = useThemeContext(`${themeName}.header`, tokens)
  const navigationButtonsContainer = useThemeContext(`${themeName}.navigationButtonsContainer`, tokens)

  return (
    <div {...calendarProps} ref={ref} className={containerTheme}>
      <div className={headerTheme}>
        <Typography as="p" tokens={{ size: 'h6' }}>
          {title}
        </Typography>
        <div className={navigationButtonsContainer}>
          <Button
            themeName={`${themeName}.navigationButtons`}
            tokens={{ ...tokens }}
            type="button"
            {...prevButtonProps}
            handlePress={prevButtonProps?.onPress}
          >
            <Icon icon={buttons?.buttonPrev?.icon ?? 'ArrowLeft'} />
          </Button>
          <Button
            themeName={`${themeName}.navigationButtons`}
            tokens={{ ...tokens }}
            type="button"
            {...nextButtonProps}
            handlePress={nextButtonProps?.onPress}
          >
            <Icon icon={buttons?.buttonNext?.icon ?? 'ArrowRight'} />
          </Button>
        </div>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}

export default Calendar
