'use client'

import { useDatePicker } from '@react-aria/datepicker'
import { useDatePickerState } from '@react-stately/datepicker'
import { useRef } from 'react'
import type { TToken } from '../../../providers/Theme/interface'
import Box from '../../Box'
import Calendar from '../../Calendar'
import { Dialog } from '../../Dialog'
import Typography from '../../Typography'
import { CalendarPopover } from './components/CalendarPopover'
import DateField from './components/DateField'
import Wrapper from './components/Wrapper'
import type { TDatePickerProps } from './interface'

function DatePicker<T extends TToken>(props: TDatePickerProps<T>) {
  const {
    popoverPlacement = 'bottom start',
    tokens,
    customTheme,
    themeName = 'datePicker',
    icon = 'ArrowDown',
    description,
    buttonLabel,
    buttonContent,
    label,
    children,
    isInvalidIndicator = '❌',
  } = props
  const state = useDatePickerState(props)
  const ref = useRef(null)
  const { groupProps, fieldProps, labelProps, descriptionProps, buttonProps, dialogProps, calendarProps } =
    useDatePicker(props, state, ref)

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
        <DateField themeName={themeName} tokens={{ ...datePickerTokens, position: 'outer' }} {...fieldProps} />
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
              <DateField themeName={themeName} tokens={{ ...datePickerTokens, position: 'inner' }} {...fieldProps} />
              {state.isInvalid && isInvalidIndicator}
            </Box>
            <Calendar {...calendarProps} tokens={datePickerTokens} />
          </Dialog>
        </CalendarPopover>
      )}
    </Box>
  )
}

export default DatePicker
