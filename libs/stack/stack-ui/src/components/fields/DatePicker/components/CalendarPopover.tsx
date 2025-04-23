import { usePopover, DismissButton, Overlay } from '@react-aria/overlays'
import * as React from 'react'
import Box, { BoxWithForwardRef } from '../../../Box'
import type { TCalendarPopoverProps } from '../interface'

export function CalendarPopover({ themeName = 'datePicker', tokens, ...rest }: TCalendarPopoverProps) {
  const ref = React.useRef(null)
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
