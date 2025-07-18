'use client'

import { useRef } from 'react'
import { useModalOverlay } from 'react-aria'
import Box, { BoxWithForwardRef } from '../../Box'
import type { TModalOverlayProps } from '../interface'

const ModalOverlay = (props: TModalOverlayProps) => {
  const { themeName, tokens, customTheme, children, state, ...rest } = props

  const ref = useRef(null)
  const { modalProps, underlayProps } = useModalOverlay(rest, state, ref)

  return (
    <Box themeName={`${themeName}.underlay`} tokens={tokens} customTheme={customTheme} {...underlayProps}>
      <BoxWithForwardRef ref={ref} themeName={`${themeName}.overlay`} tokens={tokens} {...modalProps}>
        {children}
      </BoxWithForwardRef>
    </Box>
  )
}

export default ModalOverlay
