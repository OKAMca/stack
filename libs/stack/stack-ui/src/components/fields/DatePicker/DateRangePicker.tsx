'use client'

import { useDateRangePickerState } from '@react-stately/datepicker'
import { useRef } from 'react'
import { useDateRangePicker } from 'react-aria'
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
    popoverPlacement: legacyPopoverPlacement = 'bottom start',
    placement: propPlacement = 'bottom start',
    buttonLabel,
    description,
    themeName = 'datePicker',
    tokens,
    customTheme,
    icon,
    buttonContent,
    innerDateFieldSeparator = ' - ',
    outerDateFieldSeparator = ' - ',
    invalidIndicator = '❌',
    children,
    label,
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
  const state = useDateRangePickerState(props)
  const { isInvalid, isOpen, hasTime } = state
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
    isInvalid,
    isOpen,
    hasTime,
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
          tokens={datePickerTokens}
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
            <RangeCalendar {...calendarProps} tokens={tokens} />
          </Dialog>
        </CalendarPopover>
      )}
    </Box>
  )
}

export default DateRangePicker
