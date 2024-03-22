import React from 'react'
import { FocusRing, FocusScope, useDialog } from 'react-aria'
import { BoxWithForwardRef } from '../../Box'
import Typography from '../../Typography'
import type { TModalDialogProps } from '../interface'

const ModalDialog = (props: TModalDialogProps) => {
  const { children, label, themeName, tokens, customTheme } = props

  const ref = React.useRef(null)

  const { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <BoxWithForwardRef
      themeName={`${themeName}.dialog`}
      tokens={tokens}
      customTheme={customTheme}
      ref={ref}
      {...dialogProps}
    >
      <FocusRing focusRingClass="has-focus-ring" within autoFocus>
        <FocusScope contain restoreFocus autoFocus>
          {children}
          {label && (
            <Typography themeName={`${themeName}.label`} tokens={tokens} {...titleProps}>
              {label}
            </Typography>
          )}
        </FocusScope>
      </FocusRing>
    </BoxWithForwardRef>
  )
}

export default ModalDialog
