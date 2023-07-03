import React from 'react'
import { DismissButton, Overlay, usePopover } from 'react-aria'
import { TypographyWithForwardRef } from '../../../Typography'
import type { TPopoverProps } from './Popover.interface'

const Popover = (props: TPopoverProps) => {
  const ref = React.useRef(null)
  const { popoverRef = ref, state, children, themeName = 'popover', ...rest } = props
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state,
  )

  return (
    <Overlay>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <TypographyWithForwardRef themeName={themeName} {...rest} {...popoverProps} as="div" ref={popoverRef}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </TypographyWithForwardRef>
    </Overlay>
  )
}

export default Popover
