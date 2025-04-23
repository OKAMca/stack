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
    children,
    label,
    ...rest
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

  return (
    <Box {...rest} themeName={`${themeName}.container`} tokens={tokens} customTheme={customTheme}>
      {label && (
        <Typography as="span" themeName={`${themeName}.label`} tokens={tokens} {...labelProps}>
          {label}
        </Typography>
      )}
      {description && (
        <Box as="div" themeName={`${themeName}.description`} tokens={tokens} {...descriptionProps}>
          {description}
        </Box>
      )}
      <Wrapper
        themeName={themeName}
        tokens={tokens}
        ref={ref}
        groupProps={groupProps}
        buttonProps={buttonProps}
        buttonLabel={buttonLabel}
        buttonContent={buttonContent}
        icon={icon}
      >
        <DateField
          themeName={themeName}
          tokens={{ ...tokens, position: 'outer', range: 'start' }}
          {...startFieldProps}
        />
        {outerDateFieldSeparator && (
          <Box as="span" themeName={`${themeName}.dateFieldSeparator`} tokens={tokens}>
            {outerDateFieldSeparator}
          </Box>
        )}
        <DateField themeName={themeName} tokens={{ ...tokens, position: 'outer', range: 'end' }} {...endFieldProps} />
        {state.isInvalid && '❌'}
      </Wrapper>
      {state.isOpen && (
        <CalendarPopover triggerRef={ref} state={state} placement={popoverPlacement}>
          <Dialog themeName={`${themeName}.dialog`} tokens={tokens} {...dialogProps}>
            {children}
            <Box themeName={`${themeName}.dateFieldContainer`} tokens={tokens}>
              <DateField
                themeName={themeName}
                tokens={{ ...tokens, position: 'inner', range: 'start' }}
                {...startFieldProps}
              />
              {innerDateFieldSeparator && (
                <Box as="span" themeName={`${themeName}.dateFieldSeparator`} tokens={tokens}>
                  {innerDateFieldSeparator}
                </Box>
              )}
              <DateField
                themeName={themeName}
                tokens={{ ...tokens, position: 'inner', range: 'end' }}
                {...endFieldProps}
              />
              {state.isInvalid && '❌'}
            </Box>
            <RangeCalendar {...calendarProps} />
          </Dialog>
        </CalendarPopover>
      )}
    </Box>
  )
}

export default DateRangePicker
