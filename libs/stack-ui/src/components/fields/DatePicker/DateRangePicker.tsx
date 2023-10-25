/* eslint-disable react/require-default-props */
import { useDateRangePicker } from '@react-aria/datepicker'
import { useDateRangePickerState } from '@react-stately/datepicker'
import { useRef } from 'react'
import useThemeContext from '../../../providers/Theme/hooks'
import Button from '../../Button'
import RangeCalendar from '../../Calendar/RangeCalendar'
import { Dialog } from '../../Dialog'
import Icon from '../../Icon'
import { CalendarPopover } from './components/CalendarPopover'
import DateField from './components/DateField'
import type { TDateRangePickerProps } from './interface'

function DateRangePicker(props: TDateRangePickerProps) {
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

  const { label, buttonLabel, description, themeName = 'datePicker', tokens, popoverPlacement, icon } = props

  const containerTheme = useThemeContext(`${themeName}.container`, tokens)
  const dateFieldTheme = useThemeContext(`${themeName}.dateField`, tokens)
  const labelTheme = useThemeContext(`${themeName}.label`, tokens)

  return (
    <div className={containerTheme}>
      {label && <span {...labelProps}>{label}</span>}
      {description && <div {...descriptionProps}>{description}</div>}
      <div {...groupProps} ref={ref}>
        <Button
          themeName={`${themeName}.button`}
          tokens={{ ...tokens }}
          type="button"
          {...buttonProps}
          handlePress={buttonProps.onPress}
        >
          {buttonLabel && <p className={labelTheme}>{buttonLabel}</p>}
          <div className={dateFieldTheme}>
            <DateField {...startFieldProps} /> -
            <DateField {...endFieldProps} />
            {state.validationState === 'invalid' && '❌'}
          </div>
          <Icon themeName={`${themeName}.icon`} tokens={{ ...tokens }} icon={icon ?? 'ArrowDown'} />
        </Button>
      </div>
      {state.isOpen && (
        <CalendarPopover triggerRef={ref} state={state} placement={popoverPlacement}>
          <Dialog {...dialogProps}>
            <div className={dateFieldTheme}>
              <DateField {...startFieldProps} /> -
              <DateField {...endFieldProps} />
              {state.validationState === 'invalid' && '❌'}
            </div>
            <RangeCalendar {...calendarProps} />
          </Dialog>
        </CalendarPopover>
      )}
    </div>
  )
}

export default DateRangePicker
