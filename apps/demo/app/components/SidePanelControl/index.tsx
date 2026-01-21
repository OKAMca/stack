'use client'

import { ButtonWithForwardRef, useSidePanel } from '@okam/stack-ui'

function SidePanelControl() {
  const { buttonProps } = useSidePanel()
  if (buttonProps == null) {
    return null
  }
  return (
    <ButtonWithForwardRef {...buttonProps?.openButtonProps} ref={buttonProps?.openButtonRef}>
      Open the side panel
    </ButtonWithForwardRef>
  )
}

export default SidePanelControl
