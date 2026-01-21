'use client'

/**
 * PopoverButton - react-aria overlay trigger button component
 *
 * Uses cloneElement to inject overlay props from useOverlayTrigger
 * into children, following the react-aria overlay pattern.
 *
 * @see https://react-spectrum.adobe.com/react-aria/useOverlayTrigger.html
 * @see docs/ADR/005_react-stately-eslint-exceptions.md
 */

import type { TToken } from '../../../providers/Theme/interface'
import type { TPopoverButtonProps } from '../interface'
import { cloneElement, useRef } from 'react'
import { mergeProps, OverlayContainer, useOverlayPosition, useOverlayTrigger } from 'react-aria'
import { useOverlayTriggerState } from 'react-stately'
import { Popover } from '..'
import { ButtonWithForwardRef } from '../../Button'

function PopoverButton<T extends TToken>(props: TPopoverButtonProps<T>) {
  const {
    children,
    buttonProps,
    placement = 'right',
    offset = 5,
    themeName = 'popover',
    tokens,
    customTheme,
    label,
    handlePress: handlePressProp,
    shouldCloseOnInteractOutside,
    isKeyboardDismissDisabled,
  } = props
  const state = useOverlayTriggerState(props)

  const triggerRef = useRef(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef)

  const { overlayProps: positionProps } = useOverlayPosition({
    ...props,
    placement,
    offset,
    targetRef: triggerRef,
    overlayRef,
    isOpen: state.isOpen,
  })

  const { onPress, preventFocusOnPress, ...triggerButtonProps } = triggerProps
  const handlePress: typeof onPress = (e) => {
    onPress?.(e)
    handlePressProp?.(e)
  }

  return (
    <>
      <ButtonWithForwardRef
        themeName={`${themeName}.button`}
        handlePress={handlePress}
        {...buttonProps}
        {...triggerButtonProps}
        ref={triggerRef}
      >
        {label}
      </ButtonWithForwardRef>
      {state.isOpen && (
        <OverlayContainer>
          <Popover
            themeName={themeName}
            tokens={tokens}
            customTheme={customTheme}
            triggerRef={triggerRef}
            {...mergeProps(overlayProps, positionProps)}
            popoverRef={overlayRef}
            sizeRef={triggerRef}
            state={state}
            shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
            isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          >
            {cloneElement(children, overlayProps)}
          </Popover>
        </OverlayContainer>
      )}
    </>
  )
}

export default PopoverButton
