import { useRef } from 'react'
import { useDialog } from 'react-aria'
import type { TDialogProps } from './interface'

export function Dialog({ title, children, ...props }: TDialogProps) {
  const ref = useRef(null)
  const { dialogProps } = useDialog(props, ref)

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  )
}
