import useThemeContext from 'libs/stack-ui/src/providers/Theme/hooks'
import React from 'react'
import { DismissButton, Overlay, usePopover } from 'react-aria'
import type { TPopoverProps } from './Popover.interface'

const Popover = (props: TPopoverProps) => {
  const ref = React.useRef(null)
  const {
    popoverRef = ref,
    state,
    children,
    themeName = 'popover',
    tokens,
    customTheme,
    triggerRef,
    matchWidth = true,
    ...rest
  } = props
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
      triggerRef,
    },
    state,
  )

  const theme = useThemeContext(themeName, tokens, customTheme)
  return (
    <Overlay>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <div {...rest} {...popoverProps} ref={popoverRef}>
        <div className={theme} {...(matchWidth ? { style: { width: `${triggerRef.current?.offsetWidth}px` } } : {})}>
          <DismissButton onDismiss={state.close} />
          {children}
          <DismissButton onDismiss={state.close} />
        </div>
      </div>
    </Overlay>
  )
}

export default Popover
