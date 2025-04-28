/* eslint-disable no-unused-vars */
import type { DateValue } from '@internationalized/date'
import type {
  DateFieldState,
  DateSegment,
  DatePickerStateOptions,
  DateRangePickerStateOptions,
} from '@react-stately/datepicker'
import type React from 'react'
import type { ReactNode } from 'react'
import type { AriaDatePickerProps, AriaPopoverProps, DatePickerAria, DateRangePickerAria, Placement } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'

export interface TDateSegmentProps extends TDefaultComponent {
  segment: DateSegment
  state: DateFieldState
}

interface TDatePickerBase extends Omit<AriaPopoverProps, 'popoverRef' | 'triggerRef' | 'targetRef' | 'overlayRef'> {
  /**
   * @deprecated Use `placement` instead.
   * @default 'bottom start'
   */
  popoverPlacement?: Placement
  /**
   * @default 'ArrowDown'
   */
  icon?: ReactNode
  buttonLabel?: ReactNode
  buttonContent?: ReactNode
  /**
   * @default '❌'
   */
  invalidIndicator?: ReactNode
}

export interface TDatePickerProps<T = TToken>
  extends DatePickerStateOptions<DateValue>,
    TDefaultComponent<T>,
    TDatePickerBase {}

export interface TDateRangePickerProps<T = TToken>
  extends DateRangePickerStateOptions<DateValue>,
    TDefaultComponent<T>,
    TDatePickerBase {
  /**
   * @default ' - '
   */
  innerDateFieldSeparator?: ReactNode
  /**
   * @default ' - '
   */
  outerDateFieldSeparator?: ReactNode
}

export interface TCalendarPopoverProps extends Omit<AriaPopoverProps, 'popoverRef'>, TDefaultComponent {
  children: React.ReactNode
  state: OverlayTriggerState
}

export interface TWrapperProps
  extends TDefaultComponent,
    Pick<DateRangePickerAria | DatePickerAria, 'groupProps' | 'buttonProps'>,
    Pick<TDatePickerBase, 'icon' | 'buttonLabel' | 'buttonContent'> {
  children: ReactNode
}

export interface TDateFieldProps extends TDefaultComponent, AriaDatePickerProps<DateValue> {}
