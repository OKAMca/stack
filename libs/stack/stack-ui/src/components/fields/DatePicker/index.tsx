'use client'

import { useDatePickerState } from '@react-stately/datepicker'
import { useRef } from 'react'
import { useDatePicker } from 'react-aria'
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
    popoverPlacement: legacyPopoverPlacement = 'bottom start',
    placement: propPlacement = 'bottom start',
    tokens,
    customTheme,
    themeName = 'datePicker',
    icon = 'ArrowDown',
    description,
    buttonLabel,
    buttonContent,
    label,
    children,
    invalidIndicator = '❌',
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    containerPadding,
    shouldCloseOnInteractOutside,
    arrowBoundaryOffset,
    isNonModal,
    isKeyboardDismissDisabled,
    arrowSize,
    boundaryElement,
    maxHeight,
    shouldUpdatePosition,
  } = props

  const placement = propPlacement ?? legacyPopoverPlacement
  const state = useDatePickerState(props)
  const { isInvalid, isOpen, hasTime } = state
  const ref = useRef(null)
  const { groupProps, fieldProps, labelProps, descriptionProps, buttonProps, dialogProps, calendarProps } =
    useDatePicker(props, state, ref)

  const datePickerTokens = {
    isInvalid,
    isOpen,
    hasTime,
    isDisabled,
    isReadOnly,
    isRequired,
    ...tokens,
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
        {state.isInvalid && (
          <Box
            as="span"
            themeName={`${themeName}.invalidIndicator`}
            tokens={{ ...datePickerTokens, position: 'outer' }}
          >
            {invalidIndicator}
          </Box>
        )}
      </Wrapper>
      {state.isOpen && (
        <CalendarPopover
          themeName={themeName}
          tokens={{ ...tokens, isInvalid }}
          triggerRef={ref}
          state={state}
          placement={placement}
          containerPadding={containerPadding}
          shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
          arrowBoundaryOffset={arrowBoundaryOffset}
          isNonModal={isNonModal}
          isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          arrowSize={arrowSize}
          boundaryElement={boundaryElement}
          maxHeight={maxHeight}
          shouldUpdatePosition={shouldUpdatePosition}
        >
          <Dialog themeName={`${themeName}.dialog`} tokens={datePickerTokens} {...dialogProps}>
            {children}
            <Box themeName={`${themeName}.dateFieldContainer`} tokens={datePickerTokens}>
              <DateField themeName={themeName} tokens={{ ...datePickerTokens, position: 'inner' }} {...fieldProps} />
              {state.isInvalid && (
                <Box
                  as="span"
                  themeName={`${themeName}.invalidIndicator`}
                  tokens={{ ...datePickerTokens, position: 'inner' }}
                >
                  {invalidIndicator}
                </Box>
              )}
            </Box>
            {/* Don't pass state tokens to calendar as they might override the calendar's own state tokens */}
            <Calendar {...calendarProps} tokens={tokens} />
          </Dialog>
        </CalendarPopover>
      )}
    </Box>
  )
}

export default DatePicker
