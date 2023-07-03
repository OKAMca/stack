/* eslint-disable react-hooks/exhaustive-deps */
import { OverlayContainer } from '@react-aria/overlays'
import { useCallback, useEffect, useState } from 'react'
import ModalTransition from '../../transitions/ModalTransition'
import Dialog from './Dialog'
import type { TModalProps } from './interface'

const Modal = (props: TModalProps) => {
  const [shouldRender, setShouldRender] = useState(false)
  const { children, state, onCloseCallBack, transitionComponent: TransitionComponent = ModalTransition } = props

  const handleClose = useCallback(() => {
    state.close()
    onCloseCallBack?.()
  }, [state.close, onCloseCallBack])

  useEffect(() => {
    if (!state.isOpen && shouldRender) {
      return
    }

    setShouldRender(true)
  }, [state.isOpen])

  if (!shouldRender) {
    return null
  }

  return (
    <OverlayContainer>
      <TransitionComponent isVisible={state.isOpen}>
        <Dialog isOpen={state.isOpen} onClose={handleClose} isDismissable>
          {children}
        </Dialog>
      </TransitionComponent>
    </OverlayContainer>
  )
}

export default Modal
