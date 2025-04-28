/* eslint-disable no-unused-vars */
import { createCalendar } from '@internationalized/date'
import { useDateField, useDateSegment } from '@react-aria/datepicker'
import { useLocale } from '@react-aria/i18n'
import { useDateFieldState } from '@react-stately/datepicker'
import { useRef } from 'react'
import { FocusRing, useFocusRing } from 'react-aria'
import useThemeContext from '../../../../providers/Theme/hooks'
import { BoxWithForwardRef } from '../../../Box'
import type { TDateFieldProps, TDateSegmentProps } from '../interface'

function DateSegment(props: TDateSegmentProps) {
  const { themeName = 'datePicker', tokens, customTheme, segment, state } = props
  const ref = useRef(null)
  const { segmentProps } = useDateSegment(segment, state, ref)

  const dateSegmentPlaceholderTheme = useThemeContext(`${themeName}.dateSegmentPlaceholder`)

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <FocusRing within focusRingClass="has-focus-ring">
      <BoxWithForwardRef
        {...segmentProps}
        {...focusProps}
        ref={ref}
        themeName={`${themeName}.dateSegment`}
        tokens={{
          ...tokens,
          // Hack since has-focus-ring is not getting applied
          className: isFocusVisible ? `has-focus-ring ${tokens?.className}` : (tokens?.className ?? ''),
        }}
        customTheme={customTheme}
      >
        {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
        <span
          className={dateSegmentPlaceholderTheme}
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
      </BoxWithForwardRef>
    </FocusRing>
  )
}

function DateField(props: TDateFieldProps) {
  const { themeName = 'datePicker', tokens, customTheme } = props
  const { locale } = useLocale()
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = useRef(null)
  const { fieldProps, isInvalid } = useDateField(props, state, ref)

  return (
    <BoxWithForwardRef
      {...fieldProps}
      ref={ref}
      themeName={`${themeName}.dateField`}
      tokens={{ ...tokens, isInvalid }}
      customTheme={customTheme}
    >
      {state.segments.map((segment, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <DateSegment themeName={themeName} tokens={{ ...tokens, isInvalid }} key={i} segment={segment} state={state} />
      ))}
    </BoxWithForwardRef>
  )
}

export default DateField
