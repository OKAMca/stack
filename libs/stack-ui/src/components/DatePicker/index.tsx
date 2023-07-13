import { useDatePicker } from '@react-aria/datepicker'
import { useDatePickerState } from '@react-stately/datepicker'
import { useRef } from 'react'
import useThemeContext from '../../providers/Theme/hooks'
import Button from '../Button'
import Calendar from '../Calendar'
import { Dialog } from '../Dialog'
import Icon from '../Icon'
import { CalendarPopover } from './components/CalendarPopover'
import DateField from './components/DateField'
import type { TDatePickerProps } from './interface'

function DatePicker({
  popoverPlacement = 'bottom start',
  tokens,
  customTheme,
  themeName = 'datePicker',
  icon = 'ArrowDown',
  description,
  buttonLabel,
  ...rest
}: TDatePickerProps) {
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
        <Button
          themeName={`${themeName}.button`}
          tokens={{ ...tokens }}
          type="button"
          {...buttonProps}
          handlePress={buttonProps.onPress}
        >
          {buttonLabel && <p className={labelTheme}>{buttonLabel}</p>}
          <div className={dateFieldTheme}>
            <DateField {...fieldProps} />
            {state.validationState === 'invalid' && '❌'}
          </div>
          <Icon themeName={`${themeName}.icon`} tokens={{ ...tokens }} icon={icon} />
        </Button>
      </div>
      {state.isOpen && (
        <CalendarPopover triggerRef={ref} state={state} placement={popoverPlacement}>
          <Dialog {...dialogProps}>
            <div>
              <DateField {...fieldProps} />
              {state.validationState === 'invalid' && '❌'}
            </div>
            <Calendar {...calendarProps} />
          </Dialog>
        </CalendarPopover>
      )}
    </div>
  )
}

export default DatePicker
