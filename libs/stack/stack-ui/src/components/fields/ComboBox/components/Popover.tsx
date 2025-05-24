'use client'

import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, useModal, DismissButton } from '@react-aria/overlays'
import { mergeProps } from '@react-aria/utils'
import type { RefObject } from 'react'
import type { TPopoverProps } from '../ComboBox.interface'

// Utility function to combine class names conditionally
const cn = (...classes: (string | false | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ')
}

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
        className={cn(
          'absolute top-full mt-2 text-white rounded-2xl px-0 py-0 z-30 w-[100%] md:w-[20rem] md:max-w-[50vw] max-h-[50vh] overflow-x-auto',
          variant === 'primary' && 'bg-brand-color-1-3',
          variant === 'gray' && 'bg-gray-1',
          orientation === 'left' && 'left-0',
          orientation === 'right' && 'right-0',
        )}
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  )
}

export default Popover
