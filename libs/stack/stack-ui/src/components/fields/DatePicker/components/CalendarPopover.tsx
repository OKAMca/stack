'use client'

import type { TCalendarPopoverProps } from '../interface'
import { useRef } from 'react'
import { DismissButton, Overlay, usePopover } from 'react-aria'
import { Box, BoxWithForwardRef } from '../../../Box'

export function CalendarPopover({ themeName = 'datePicker', tokens, ...rest }: TCalendarPopoverProps) {
  const ref = useRef(null)
  const { state, children } = { ...rest }

  const { popoverProps, underlayProps } = usePopover(
    {
      ...rest,
      popoverRef: ref,
    },
    state,
  )

  return (
    <Overlay>
      <Box themeName={`${themeName}.calendarUnderlay`} tokens={tokens} {...underlayProps} />
      <BoxWithForwardRef themeName={`${themeName}.calendarPopover`} tokens={tokens} {...popoverProps} ref={ref}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </BoxWithForwardRef>
    </Overlay>
  )
}
