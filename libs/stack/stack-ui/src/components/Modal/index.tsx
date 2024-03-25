'use client'

import { Overlay } from 'react-aria'
import ModalTransition from '../../transitions/ModalTransition'
import ModalDialog from './components/ModalDialog'
import ModalOverlay from './components/ModalOverlay'
import type { TModalProps } from './interface'

const Modal = (props: TModalProps) => {
  const {
    children,
    transitionComponent: TransitionComponent = ModalTransition,
    state,
    themeName,
    tokens,
    ...rest
  } = props

  return (
    <Overlay>
      <TransitionComponent isVisible={state.isOpen}>
        <ModalOverlay themeName={themeName} tokens={tokens} state={state} {...rest}>
          <ModalDialog themeName={themeName} tokens={tokens} {...rest}>
            {children}
          </ModalDialog>
        </ModalOverlay>
      </TransitionComponent>
    </Overlay>
  )
}

export default Modal
