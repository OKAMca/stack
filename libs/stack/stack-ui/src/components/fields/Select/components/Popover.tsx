'use client'

import type { TPopoverProps } from './Popover.interface'
import * as React from 'react'
import { DismissButton, Overlay, usePopover } from 'react-aria'
import { Box, BoxWithForwardRef } from '../../../Box'

function Popover(props: TPopoverProps) {
  const ref = React.useRef(null)
  const { popoverRef = ref, state, children, themeName = 'popover', tokens, customTheme, triggerRef, ...rest } = props
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
      triggerRef,
    },
    state,
  )

  return (
    <Overlay>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <Box {...rest}>
        <BoxWithForwardRef {...popoverProps} ref={popoverRef} themeName={themeName} tokens={tokens}>
          <DismissButton onDismiss={state.close} />
          {children}
          <DismissButton onDismiss={state.close} />
        </BoxWithForwardRef>
      </Box>
    </Overlay>
  )
}

export default Popover
