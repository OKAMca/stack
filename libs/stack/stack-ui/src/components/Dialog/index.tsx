import { useRef } from 'react'
import { useDialog } from 'react-aria'
import { BoxWithForwardRef } from '../Box'
import Typography from '../Typography'
import type { TDialogProps } from './interface'

export function Dialog(props: TDialogProps) {
  const { themeName = 'dialog', tokens, title, customTheme, children, ...rest } = props
  const ref = useRef(null)
  const { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <BoxWithForwardRef
      {...rest}
      themeName={`${themeName}.wrapper`}
      tokens={tokens}
      customTheme={customTheme}
      {...dialogProps}
      ref={ref}
    >
      {title && (
        <Typography themeName={`${themeName}.title`} tokens={tokens} {...titleProps}>
          {title}
        </Typography>
      )}
      {children}
    </BoxWithForwardRef>
  )
}
