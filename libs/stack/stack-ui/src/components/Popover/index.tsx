'use client'

/* eslint-disable react/display-name */
import type { FocusableElement } from '@react-types/shared'
import type { RefObject } from 'react'
import React from 'react'
import {
  DismissButton,
  FocusRing,
  FocusScope,
  mergeProps,
  OverlayContainer,
  useDialog,
  useModal,
  useOverlay,
  useOverlayPosition,
  useOverlayTrigger,
} from 'react-aria'
import { useOverlayTriggerState } from 'react-stately'
import useThemeContext from '../../providers/Theme/hooks'
import { BoxWithForwardRef } from '../Box'
import { ButtonWithForwardRef } from '../Button'
import type { IPopoverProps, TPopoverButtonProps } from './interface'

const Popover = React.forwardRef((props: IPopoverProps, ref: React.Ref<HTMLElement>) => {
  const {
    isOpen,
    onClose,
    children,
    positionProps,
    themeName = 'popover',
    tokens,
    customTheme,
    isDismissable,
    shouldCloseOnBlur,
    ...rest
  } = props

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const { overlayProps } = useOverlay(
    {
      isDismissable,
      shouldCloseOnBlur,
      isOpen,
      onClose,
    },
    ref as RefObject<Element>,
  )

  const { modalProps } = useModal()
  const { dialogProps } = useDialog({}, ref as RefObject<FocusableElement>)

  const theme = useThemeContext(`${themeName}.popover`, tokens, customTheme)

  // Add a hidden <DismissButton> component at the end of the popover
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope autoFocus restoreFocus contain>
      <BoxWithForwardRef
        customTheme={theme}
        {...mergeProps(overlayProps, modalProps, dialogProps)}
        ref={ref}
        {...positionProps}
        {...rest}
      >
        {React.Children.map(children, (child) => (
          <FocusRing focusRingClass="has-focus-ring">{child}</FocusRing>
        ))}
        <DismissButton onDismiss={onClose} />
      </BoxWithForwardRef>
    </FocusScope>
  )
})

function PopoverButton(props: TPopoverButtonProps) {
  const {
    children,
    buttonProps,
    placement = 'right',
    offset = 5,
    themeName = 'popover',
    tokens,
    customTheme,
    ...rest
  } = props
  const state = useOverlayTriggerState({})

  const triggerRef = React.useRef(null)
  const overlayRef = React.useRef<HTMLDivElement>(null)

  // Get props for the trigger and overlay. This also handles
  // hiding the overlay when a parent element of the trigger scrolls
  // (which invalidates the popover positioning).
  const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef)

  // Get popover positioning props relative to the trigger
  const { overlayProps: positionProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    placement,
    offset,
    isOpen: state.isOpen,
  })

  const { onPress: handlePress, ...triggerButtonProps } = triggerProps

  return (
    <>
      <ButtonWithForwardRef
        themeName={`${themeName}.button`}
        handlePress={handlePress}
        {...buttonProps}
        {...triggerButtonProps}
        ref={triggerRef}
      />
      {state.isOpen && (
        <OverlayContainer>
          <Popover
            themeName={themeName}
            tokens={tokens}
            customTheme={customTheme}
            {...overlayProps}
            {...rest}
            positionProps={positionProps}
            ref={overlayRef}
            isOpen={state.isOpen}
            onClose={state.close}
          >
            {children}
          </Popover>
        </OverlayContainer>
      )}
    </>
  )
}

export default PopoverButton
