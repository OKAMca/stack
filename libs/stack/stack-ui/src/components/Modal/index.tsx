'use client'

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
    <ModalOverlay themeName={themeName} tokens={tokens} state={state} {...rest}>
      <TransitionComponent isVisible={state.isOpen}>
        <ModalDialog themeName={themeName} tokens={tokens} {...rest}>
          {children}
        </ModalDialog>
      </TransitionComponent>
    </ModalOverlay>
  )
}

export default Modal
