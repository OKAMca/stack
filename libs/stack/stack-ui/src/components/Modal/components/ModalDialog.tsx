import React from 'react'
import { FocusRing, FocusScope, useDialog } from 'react-aria'
import { BoxWithForwardRef } from '../../Box'
import type { TModalDialogProps } from '../interface'

const ModalDialog = (props: TModalDialogProps) => {
  const { children, themeName, tokens, customTheme } = props

  const ref = React.useRef(null)

  const { dialogProps } = useDialog(props, ref)

  return (
    <BoxWithForwardRef
      themeName={`${themeName}.dialog`}
      tokens={tokens}
      customTheme={customTheme}
      ref={ref}
      aria-modal
      {...dialogProps}
    >
      <FocusRing focusRingClass="has-focus-ring" within autoFocus>
        <FocusScope contain restoreFocus autoFocus>
          {children}
        </FocusScope>
      </FocusRing>
    </BoxWithForwardRef>
  )
}

export default ModalDialog
