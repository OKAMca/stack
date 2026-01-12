'use client'

import { useEffect } from 'react'
import Div100vh from 'react-div-100vh'
import { useSidePanel } from '../../providers/SidePanel'
import type { TToken } from '../../providers/Theme/interface'
import RenderWithSlide from '../../transitions/RenderWithSlide'
import SidePanelTransition from '../../transitions/SidePanelTransition'
import Box from '../Box'
import Modal from '../Modal'
import type { TSidePanelProps } from './interface'

const SidePanel = <T extends TToken>(props: TSidePanelProps<T>) => {
  const {
    children,
    closeBtnRender,
    themeName = 'sidePanel',
    tokens,
    TransitionAnimation = RenderWithSlide,
    PanelTransition = SidePanelTransition,
    onOpenChange,
    customTheme,
    isDismissable = true,
    shouldCloseOnInteractOutside,
    isKeyboardDismissDisabled = false,
    onCloseCallBack,
    title,
    ...rest
  } = props

  const { overlayState, overlayProps } = useSidePanel()
  const { isOpen } = overlayState

  useEffect(() => {
    onOpenChange?.(isOpen)
    if (!isOpen) {
      onCloseCallBack?.()
    }
  }, [isOpen, onOpenChange, onCloseCallBack])

  const sidePanelTokens = {
    isOpen,
    ...tokens,
  }

  return (
    <Modal
      themeName={themeName}
      tokens={sidePanelTokens}
      customTheme={customTheme}
      state={overlayState}
      {...overlayProps}
      transitionComponent={PanelTransition}
      isDismissable={isDismissable}
      shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      title={title}
      {...rest}
    >
      <Box as={Div100vh} themeName={`${themeName}.wrapper`} tokens={sidePanelTokens}>
        {closeBtnRender && closeBtnRender()}
        <TransitionAnimation themeName={`${themeName}.transitionAnimation`} tokens={sidePanelTokens} isVisible={isOpen}>
          <Box themeName={`${themeName}.container`} tokens={sidePanelTokens}>
            <Box themeName={`${themeName}.innerContainer`} tokens={sidePanelTokens}>
              {children}
            </Box>
          </Box>
        </TransitionAnimation>
      </Box>
    </Modal>
  )
}

export default SidePanel
