'use client'

import { OverlayContainer } from 'react-aria'
import type { TToken } from '../../providers/Theme/interface'
import ModalTransition from '../../transitions/ModalTransition'
import ModalDialog from './components/ModalDialog'
import ModalOverlay from './components/ModalOverlay'
import type { TModalProps } from './interface'

const Modal = <T extends TToken>(props: TModalProps<T>) => {
  const {
    children,
    transitionComponent: TransitionComponent = ModalTransition,
    state,
    themeName,
    tokens,
    ...rest
  } = props

  return (
    <OverlayContainer>
      <TransitionComponent themeName={`${themeName}.transition`} tokens={tokens} isVisible={state.isOpen}>
        <ModalOverlay themeName={themeName} tokens={tokens} state={state} {...rest}>
          <ModalDialog themeName={themeName} tokens={tokens} {...rest}>
            {children}
          </ModalDialog>
        </ModalOverlay>
      </TransitionComponent>
    </OverlayContainer>
  )
}

export default Modal
