/* eslint-disable react/display-name */
import type { Placement } from '@react-types/overlays'
import type { FocusableElement } from '@react-types/shared'
import type { LegacyRef, RefObject } from 'react'
import React from 'react'
import {
  DismissButton,
  FocusScope,
  mergeProps,
  Overlay,
  OverlayContainer,
  useDialog,
  useModal,
  useOverlay,
  useOverlayPosition,
  useOverlayTrigger,
  usePopover,
} from 'react-aria'
import { useOverlayTriggerState } from 'react-stately'
import { ButtonWithForwardRef } from '../Button'
import type { TButtonProps } from '../Button/interface'
import type { IBasePopoverProps, IPopoverProps } from './interface'

const Popover = React.forwardRef((props: IPopoverProps, ref) => {
  const { isOpen, onClose, children, style } = props

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: false,
      isDismissable: false,
    },
    ref as RefObject<Element>,
  )

  const { modalProps } = useModal()
  const { dialogProps } = useDialog({}, ref as RefObject<FocusableElement>)

  // Add a hidden <DismissButton> component at the end of the popover
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope contain restoreFocus>
      <div
        {...mergeProps(overlayProps, modalProps, dialogProps)}
        ref={ref as LegacyRef<HTMLDivElement>}
        style={{
          background: 'white',
          color: 'black',
          padding: 30,
          ...style,
        }}
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  )
})

export const BasePopover = ({ children, state, offset = 8, ...props }: IBasePopoverProps) => {
  const popoverRef = React.useRef(null)
  const popover = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state,
  )

  const { popoverProps, underlayProps } = popover

  return (
    <Overlay>
      <div {...underlayProps} />
      <div {...popoverProps} ref={popoverRef}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}

function PopoverButton({
  children,
  buttonProps,
  placement = 'right',
  offset = 5,
}: {
  children: React.ReactNode
  buttonProps: TButtonProps
  placement: Placement
  offset: number
}) {
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
      <ButtonWithForwardRef handlePress={handlePress} {...buttonProps} {...triggerButtonProps} ref={triggerRef}>
        Open Popover
      </ButtonWithForwardRef>
      {state.isOpen && (
        <OverlayContainer>
          <Popover {...overlayProps} {...positionProps} ref={overlayRef} isOpen={state.isOpen} onClose={state.close}>
            {children}
          </Popover>
        </OverlayContainer>
      )}
    </>
  )
}

export default PopoverButton
