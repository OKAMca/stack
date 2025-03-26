'use client'

import React from 'react'
import Div100vh from 'react-div-100vh'
import { useSidePanel } from '../../providers/SidePanel'
import useThemeContext from '../../providers/Theme/hooks'
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
    customTheme,
  } = props

  const wrapperTheme = useThemeContext(`${themeName}.wrapper`, tokens, customTheme)

  const { overlayState, overlayProps } = useSidePanel()

  return (
    <Modal
      themeName={themeName}
      tokens={tokens}
      state={overlayState}
      {...overlayProps}
      transitionComponent={PanelTransition}
      isDismissable
    >
      <Div100vh className={wrapperTheme}>
        {closeBtnRender && closeBtnRender()}
        <TransitionAnimation
          themeName={`${themeName}.transitionAnimation`}
          tokens={tokens}
          isVisible={overlayState.isOpen}
        >
          <Box themeName={`${themeName}.container`} tokens={tokens}>
            <Box themeName={`${themeName}.innerContainer`} tokens={tokens}>
              {children}
            </Box>
          </Box>
        </TransitionAnimation>
      </Div100vh>
    </Modal>
  )
}

export default SidePanel
