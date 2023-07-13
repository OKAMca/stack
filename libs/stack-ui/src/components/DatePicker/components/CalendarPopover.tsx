import { usePopover, DismissButton, Overlay } from '@react-aria/overlays'
import useThemeContext from 'libs/stack-ui/src/providers/Theme/hooks'
import * as React from 'react'
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

  const underlayTheme = useThemeContext(`${themeName}.calendarUnderlay`, tokens)
  const popoverTheme = useThemeContext(`${themeName}.calendarPopover`, tokens)

  return (
    <Overlay>
      <div {...underlayProps} className={underlayTheme} />
      <div {...popoverProps} ref={ref} className={popoverTheme}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}
