import React from 'react'
import { FocusRing, FocusScope, useDialog, useModal, useOverlay } from 'react-aria'
import type { ModalDialogProps } from '../Lightbox/interface'

const ModalDialog = (props: ModalDialogProps) => {
  const { children } = props

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = React.useRef(null)
  const { overlayProps, underlayProps } = useOverlay(props, ref)

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  const { modalProps } = useModal()

  // Get props for the dialog and its title
  const { dialogProps } = useDialog(props, ref)

  return (
    <div {...underlayProps}>
      <FocusRing focusRingClass="has-focus-ring" within autoFocus>
        <FocusScope contain restoreFocus autoFocus>
          <div {...overlayProps} {...dialogProps} {...modalProps} ref={ref}>
            {children}
          </div>
        </FocusScope>
      </FocusRing>
    </div>
  )
}

export default ModalDialog
