'use client'

import React from 'react'
import { DismissButton, Overlay, useOverlayTrigger, usePopover } from 'react-aria'
import { useOverlayTriggerState } from 'react-stately'
import { BoxWithForwardRef } from '../Box'
import { ButtonWithForwardRef } from '../Button'
import type { TPopoverContentProps, TPopoverProps } from './interface'

export const PopoverContent = (props: TPopoverContentProps) => {
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
      <div
        {...rest}
        style={{ [`--${themeName}-container-width`]: `${triggerRef.current?.offsetWidth}px` } as React.CSSProperties}
      >
        <BoxWithForwardRef {...popoverProps} ref={popoverRef} themeName={`${themeName}.popover`} tokens={tokens}>
          <DismissButton onDismiss={state.close} />
          {children}
          <DismissButton onDismiss={state.close} />
        </BoxWithForwardRef>
      </div>
    </Overlay>
  )
}

const Popover = (props: TPopoverProps) => {
  const {
    label,
    children,
    themeName = 'popover',
    tokens,
    customTheme,
    placement = 'right',
    offset = 5,
    ...rest
  } = props
  const ref = React.useRef(null)
  const state = useOverlayTriggerState(props)
  const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, ref)
  const { onPress: handlePress, ...triggerButtonProps } = triggerProps

  return (
    <>
      <ButtonWithForwardRef
        themeName={`${themeName}.button`}
        tokens={tokens}
        customTheme={customTheme}
        {...triggerButtonProps}
        handlePress={handlePress}
        ref={ref}
      >
        {label}
      </ButtonWithForwardRef>
      {state.isOpen && (
        <PopoverContent
          {...rest}
          placement={placement}
          offset={offset}
          triggerRef={ref}
          state={state}
          themeName={themeName}
          tokens={tokens}
          customTheme={customTheme}
        >
          {React.cloneElement(children, overlayProps)}
        </PopoverContent>
      )}
    </>
  )
}

export default Popover
