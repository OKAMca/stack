import { useRef } from 'react'
import { useDialog } from 'react-aria'
import { BoxWithForwardRef } from '../Box'
import type { TDialogProps } from './interface'

export function Dialog(props: TDialogProps) {
  const { themeName = 'dialog', tokens, title, children, ...rest } = props
  const ref = useRef(null)
  const { dialogProps } = useDialog(props, ref)

  return (
    <BoxWithForwardRef {...rest} themeName={themeName} tokens={tokens} {...dialogProps} ref={ref}>
      {children}
    </BoxWithForwardRef>
  )
}
