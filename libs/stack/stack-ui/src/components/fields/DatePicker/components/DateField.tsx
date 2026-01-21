'use client'

import type { TDateFieldProps, TDateSegmentProps } from '../interface'
import { createCalendar } from '@internationalized/date'
import { useRef } from 'react'
import { FocusRing, useDateField, useDateSegment, useFocusRing, useLocale } from 'react-aria'
import { useDateFieldState } from 'react-stately'
import useThemeContext from '../../../../providers/Theme/hooks'
import { BoxWithForwardRef } from '../../../Box'

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

  const { isDisabled, isReadOnly, isRequired } = state

  const ref = useRef(null)
  const { fieldProps, isInvalid } = useDateField(props, state, ref)

  const dateFieldTokens = {
    isInvalid,
    isDisabled,
    isReadOnly,
    isRequired,
    ...tokens,
  }

  return (
    <BoxWithForwardRef
      {...fieldProps}
      ref={ref}
      themeName={`${themeName}.dateField`}
      tokens={dateFieldTokens}
      customTheme={customTheme}
    >
      {state.segments.map((segment, i) => (
        // eslint-disable-next-line react/no-array-index-key -- react-stately segments lack stable IDs; position-based key matches library pattern
        <DateSegment themeName={themeName} tokens={dateFieldTokens} key={i} segment={segment} state={state} />
      ))}
    </BoxWithForwardRef>
  )
}

export default DateField
