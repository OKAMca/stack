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
    ...rest
  } = props
  const state = useDatePickerState(props)
  const ref = useRef(null)
  const { groupProps, fieldProps, labelProps, descriptionProps, buttonProps, dialogProps, calendarProps } =
    useDatePicker(props, state, ref)

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
        <DateField themeName={themeName} tokens={{ ...tokens, position: 'outer' }} {...fieldProps} />
      </Wrapper>
      {state.isOpen && (
        <CalendarPopover triggerRef={ref} state={state} placement={popoverPlacement}>
          <Dialog themeName={`${themeName}.dialog`} tokens={tokens} {...dialogProps}>
            {children}
            <Box themeName={`${themeName}.dateFieldContainer`} tokens={tokens}>
              <DateField themeName={themeName} tokens={{ ...tokens, position: 'inner' }} {...fieldProps} />
              {state.isInvalid && '❌'}
            </Box>
            <Calendar {...calendarProps} />
          </Dialog>
        </CalendarPopover>
      )}
    </Box>
  )
}

export default DatePicker
