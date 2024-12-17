/* eslint-disable no-unused-vars */
import type { DateValue } from '@internationalized/date'
import type {
  DateFieldState,
  DateSegment,
  DatePickerStateOptions,
  DateRangePickerStateOptions,
} from '@react-stately/datepicker'
import type { RangeValue } from '@react-types/shared'
import type React from 'react'
import type { AriaPopoverProps } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'

export interface TDateSegmentProps {
  segment: DateSegment
  state: DateFieldState
}

type PopoverPlacement =
  | 'bottom'
  | 'bottom left'
  | 'bottom right'
  | 'bottom start'
  | 'bottom end'
  | 'top'
  | 'top left'
  | 'top right'
  | 'top start'
  | 'top end'
  | 'left'
  | 'left top'
  | 'left bottom'
  | 'start'
  | 'start top'
  | 'start bottom'
  | 'right'
  | 'right top'
  | 'right bottom'
  | 'end'
  | 'end top'
  | 'end bottom'

export interface TDatePickerProps<T = TToken> extends DatePickerStateOptions<DateValue>, TDefaultComponent<T> {
  label?: string
  popoverPlacement?: PopoverPlacement
  icon?: string
  buttonLabel?: string
  description?: string
}

export interface TDateRangePickerProps extends DateRangePickerStateOptions<DateValue>, TDefaultComponent {
  buttonLabel?: string
  label?: string
  description?: string
  icon?: string
  popoverPlacement?: PopoverPlacement
  minValue?: DateValue
  value?: {
    start: DateValue
    end: DateValue
  }
  onChange?: (value: RangeValue<DateValue> | null) => void
}

export interface TCalendarPopoverProps extends Omit<AriaPopoverProps, 'popoverRef'>, TDefaultComponent {
  children: React.ReactNode
  state: OverlayTriggerState
}
