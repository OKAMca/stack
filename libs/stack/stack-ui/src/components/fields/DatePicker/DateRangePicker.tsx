'use client'

/* eslint-disable react/require-default-props */
import { useDateRangePicker } from '@react-aria/datepicker'
import { useDateRangePickerState } from '@react-stately/datepicker'
import { useRef } from 'react'
import Box from '../../Box'
import RangeCalendar from '../../Calendar/RangeCalendar'
import { Dialog } from '../../Dialog'
import Typography from '../../Typography'
import { CalendarPopover } from './components/CalendarPopover'
import DateField from './components/DateField'
import Wrapper from './components/Wrapper'
import type { TDateRangePickerProps } from './interface'

function DateRangePicker(props: TDateRangePickerProps) {
  const {
    buttonLabel,
    description,
    themeName = 'datePicker',
    tokens,
    customTheme,
    popoverPlacement,
    icon,
    buttonContent,
    innerDateFieldSeparator = ' - ',
    outerDateFieldSeparator = ' - ',
    isInvalidIndicator = '❌',
    children,
    label,
  } = props
  const state = useDateRangePickerState(props)
  const ref = useRef(null)
  const {
    labelProps,
    descriptionProps,
    groupProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(props, state, ref)

  const datePickerTokens = {
    ...tokens,
    isInvalid: state.isInvalid,
  }

  return (
    <Box themeName={`${themeName}.container`} tokens={datePickerTokens} customTheme={customTheme}>
      {label && (
        <Typography as="span" themeName={`${themeName}.label`} tokens={datePickerTokens} {...labelProps}>
          {label}
        </Typography>
      )}
      {description && (
        <Box as="div" themeName={`${themeName}.description`} tokens={datePickerTokens} {...descriptionProps}>
          {description}
        </Box>
      )}
      <Wrapper
        themeName={themeName}
        tokens={datePickerTokens}
        ref={ref}
        groupProps={groupProps}
        buttonProps={buttonProps}
        buttonLabel={buttonLabel}
        buttonContent={buttonContent}
        icon={icon}
      >
        <DateField
          themeName={themeName}
          tokens={{ ...datePickerTokens, position: 'outer', range: 'start' }}
          {...startFieldProps}
        />
        {outerDateFieldSeparator && (
          <Box as="span" themeName={`${themeName}.dateFieldSeparator`} tokens={datePickerTokens}>
            {outerDateFieldSeparator}
          </Box>
        )}
        <DateField
          themeName={themeName}
          tokens={{ ...datePickerTokens, position: 'outer', range: 'end' }}
          {...endFieldProps}
        />
        {state.isInvalid && isInvalidIndicator}
      </Wrapper>
      {state.isOpen && (
        <CalendarPopover
          themeName={themeName}
          tokens={datePickerTokens}
          triggerRef={ref}
          state={state}
          placement={popoverPlacement}
        >
          <Dialog themeName={`${themeName}.dialog`} tokens={datePickerTokens} {...dialogProps}>
            {children}
            <Box themeName={`${themeName}.dateFieldContainer`} tokens={datePickerTokens}>
              <DateField
                themeName={themeName}
                tokens={{ ...datePickerTokens, position: 'inner', range: 'start' }}
                {...startFieldProps}
              />
              {innerDateFieldSeparator && (
                <Box as="span" themeName={`${themeName}.dateFieldSeparator`} tokens={datePickerTokens}>
                  {innerDateFieldSeparator}
                </Box>
              )}
              <DateField
                themeName={themeName}
                tokens={{ ...datePickerTokens, position: 'inner', range: 'end' }}
                {...endFieldProps}
              />
              {state.isInvalid && isInvalidIndicator}
            </Box>
            <RangeCalendar {...calendarProps} />
          </Dialog>
        </CalendarPopover>
      )}
    </Box>
  )
}

export default DateRangePicker
