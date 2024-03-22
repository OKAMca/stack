import { useRef } from 'react'
import { Overlay, useModalOverlay } from 'react-aria'
import Box, { BoxWithForwardRef } from '../../Box'
import type { TModalOverlayProps } from '../interface'

const ModalOverlay = (props: TModalOverlayProps) => {
  const { themeName, tokens, customTheme, children, state, ariaLabelledBy, ...rest } = props

  const ref = useRef(null)
  const { modalProps, underlayProps } = useModalOverlay(rest, state, ref)

  return (
    <Overlay>
      <Box themeName={`${themeName}.underlay`} tokens={tokens} customTheme={customTheme} {...underlayProps}>
        <BoxWithForwardRef ref={ref} themeName={`${themeName}.overlay`} tokens={tokens} {...modalProps} aria-modal>
          {children}
        </BoxWithForwardRef>
      </Box>
    </Overlay>
  )
}

export default ModalOverlay
