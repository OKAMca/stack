'use client'

import { useDatePicker } from '@react-aria/datepicker'
import { useDatePickerState } from '@react-stately/datepicker'
import { useRef } from 'react'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TToken } from '../../../providers/Theme/interface'
import Box from '../../Box'
import Button from '../../Button'
import Calendar from '../../Calendar'
import { Dialog } from '../../Dialog'
import Icon from '../../Icon'
import { CalendarPopover } from './components/CalendarPopover'
import DateField from './components/DateField'
import type { TDatePickerProps } from './interface'

function DatePicker<T extends TToken>({
  popoverPlacement = 'bottom start',
  tokens,
  customTheme,
  themeName = 'datePicker',
  icon = 'ArrowDown',
  description,
  buttonLabel,
  ...rest
}: TDatePickerProps<T>) {
  const state = useDatePickerState({ ...rest })
  const ref = useRef(null)
  const { groupProps, fieldProps, labelProps, descriptionProps, buttonProps, dialogProps, calendarProps } =
    useDatePicker({ ...rest }, state, ref)

  const { label } = { ...rest }

  const containerTheme = useThemeContext(`${themeName}.container`, tokens)
  const dateFieldTheme = useThemeContext(`${themeName}.dateField`, tokens)
  const labelTheme = useThemeContext(`${themeName}.label`, tokens)

  return (
    <div className={containerTheme}>
      {label && <span {...labelProps}>{label}</span>}
      {description && <div {...descriptionProps}>{description}</div>}
      <div {...groupProps} ref={ref}>
        <Box themeName={`${themeName}.button`} tokens={{ ...tokens }}>
          {buttonLabel && <p className={labelTheme}>{buttonLabel}</p>}
          <div className={dateFieldTheme}>
            <DateField {...fieldProps} />
            {state.isInvalid && '❌'}
          </div>
          <Button
            {...buttonProps}
            themeName={`${themeName}.button`}
            tokens={{ ...tokens }}
            customTheme="border-none p-0"
            handlePress={buttonProps.onPress}
          >
            <Icon themeName={`${themeName}.icon`} tokens={{ ...tokens }} icon={icon} />
          </Button>
        </Box>
      </div>
      {state.isOpen && (
        <CalendarPopover triggerRef={ref} state={state} placement={popoverPlacement}>
          <Dialog {...dialogProps}>
            <div>
              <DateField {...fieldProps} />
              {state.isInvalid && '❌'}
            </div>
            <Calendar {...calendarProps} />
          </Dialog>
        </CalendarPopover>
      )}
    </div>
  )
}

export default DatePicker
