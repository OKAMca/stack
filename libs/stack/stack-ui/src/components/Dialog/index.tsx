'use client'

import type { TDialogProps } from './interface'
import { filterDOMProps } from '@react-aria/utils'
import { useRef } from 'react'
import { useDialog } from 'react-aria'
import { BoxWithForwardRef } from '../Box'
import { Typography } from '../Typography'

export function Dialog(props: TDialogProps) {
  const { themeName = 'dialog', tokens, title, customTheme, children, ...rest } = props
  const ref = useRef(null)
  const { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <BoxWithForwardRef
      {...filterDOMProps(rest)}
      themeName={`${themeName}.wrapper`}
      tokens={tokens}
      customTheme={customTheme}
      {...dialogProps}
      ref={ref}
    >
      {title != null && title !== '' && (
        <Typography themeName={`${themeName}.title`} tokens={tokens} {...titleProps}>
          {title}
        </Typography>
      )}
      {children}
    </BoxWithForwardRef>
  )
}
