'use client'

import type { TToken } from '../../providers/Theme/interface'
import type { TModalProps } from './interface'
import { OverlayContainer } from 'react-aria'
import ModalTransition from '../../transitions/ModalTransition'
import ModalDialog from './components/ModalDialog'
import ModalOverlay from './components/ModalOverlay'

function Modal<T extends TToken>(props: TModalProps<T>) {
  const {
    children,
    transitionComponent: TransitionComponent = ModalTransition,
    state,
    themeName,
    tokens,
    ...rest
  } = props

  const { isOpen } = state

  const modalTokens = {
    isOpen,
    ...tokens,
  }

  return (
    <OverlayContainer>
      <TransitionComponent themeName={`${themeName}.transition`} tokens={modalTokens} isVisible={isOpen}>
        <ModalOverlay themeName={themeName} tokens={modalTokens} state={state} {...rest}>
          <ModalDialog themeName={themeName} tokens={modalTokens} {...rest}>
            {children}
          </ModalDialog>
        </ModalOverlay>
      </TransitionComponent>
    </OverlayContainer>
  )
}

export default Modal
