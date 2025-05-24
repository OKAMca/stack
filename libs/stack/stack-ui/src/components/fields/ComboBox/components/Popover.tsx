'use client'

import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, useModal, DismissButton } from '@react-aria/overlays'
import { mergeProps } from '@react-aria/utils'
import type { RefObject } from 'react'
import type { TPopoverProps } from '../ComboBox.interface'
import { getBgVariant, getPopOrientation, popoverStyles } from '../ComboBox.styles'

function Popover(props: TPopoverProps) {
  const {
    isOpen,
    onClose,
    children,
    variant = 'gray',
    orientation,
    popoverRef,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    triggerRef,
    ...otherProps
  } = props

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true,
    },
    popoverRef as RefObject<HTMLElement>,
  )

  const { modalProps } = useModal()
  const { dialogProps } = useDialog(otherProps, triggerRef as RefObject<HTMLElement>)

  // Add a hidden <DismissButton> component at the end of the popover
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope contain restoreFocus>
      <div
        {...mergeProps(overlayProps, modalProps, dialogProps)}
        ref={popoverRef}
        css={[popoverStyles, getBgVariant(variant), getPopOrientation(orientation)]}
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  )
}

export default Popover
