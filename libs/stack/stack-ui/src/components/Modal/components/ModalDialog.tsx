'use client'

import type { TModalDialogProps } from '../interface'
import { FocusRing, FocusScope } from 'react-aria'
import { Dialog } from '../../Dialog'

function ModalDialog(props: TModalDialogProps) {
  const { children, themeName, tokens, customTheme, title, ...rest } = props

  return (
    <Dialog themeName={`${themeName}.dialog`} tokens={tokens} customTheme={customTheme} title={title} {...rest}>
      <FocusRing focusRingClass="has-focus-ring" within autoFocus>
        <FocusScope contain restoreFocus autoFocus>
          {children}
        </FocusScope>
      </FocusRing>
    </Dialog>
  )
}

export default ModalDialog
