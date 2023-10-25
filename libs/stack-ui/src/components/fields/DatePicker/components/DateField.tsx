/* eslint-disable no-unused-vars */
import type { DateValue } from '@internationalized/date'
import { createCalendar } from '@internationalized/date'
import type { AriaDatePickerProps } from '@react-aria/datepicker'
import { useDateField, useDateSegment } from '@react-aria/datepicker'
import { useLocale } from '@react-aria/i18n'
import { useDateFieldState } from '@react-stately/datepicker'
import useThemeContext from 'libs/stack-ui/src/providers/Theme/hooks'
import { useRef } from 'react'
import { FocusRing } from 'react-aria'
import type { TDateSegmentProps } from '../interface'

function DateSegment({ segment, state }: TDateSegmentProps) {
  const ref = useRef(null)
  const { segmentProps } = useDateSegment(segment, state, ref)

  const theme = useThemeContext('datePicker.dateSegment')

  return (
    <FocusRing focusRingClass="has-focus-ring">
      <div {...segmentProps} ref={ref} className={theme}>
        {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
        <span
          aria-hidden="true"
          style={{
            visibility: segment.isPlaceholder ? 'visible' : 'hidden',
            height: segment.isPlaceholder ? '' : 0,
            pointerEvents: 'none',
            display: segment.isPlaceholder ? 'block' : 'none',
          }}
        >
          {segment.placeholder}
        </span>
        {segment.isPlaceholder ? '' : segment.text}
      </div>
    </FocusRing>
  )
}

function DateField(props: AriaDatePickerProps<DateValue>) {
  const { locale } = useLocale()
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = useRef(null)
  const { fieldProps } = useDateField(props, state, ref)

  return (
    <div {...fieldProps} ref={ref} className="flex">
      {state.segments.map((segment, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  )
}

export default DateField
