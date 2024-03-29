'use client'

import React from 'react'
import Div100vh from 'react-div-100vh'
import { useSidePanel } from '../../providers/SidePanel'
import useThemeContext from '../../providers/Theme/hooks'
import RenderWithSlide from '../../transitions/RenderWithSlide'
import SidePanelTransition from '../../transitions/SidePanelTransition'
import Modal from '../Modal'
import type { TSidePanelProps } from './interface'

const SidePanel = (props: TSidePanelProps) => {
  const {
    children,
    closeBtnRender,
    themeName = 'sidePanel',
    tokens,
    TransitionAnimation = RenderWithSlide,
    PanelTransition = SidePanelTransition,
    customTheme,
    onCloseCallBack,
  } = props

  const wrapperTheme = useThemeContext(`${themeName}.wrapper`, tokens, customTheme)
  const containerTheme = useThemeContext(`${themeName}.container`, tokens, customTheme)
  const innerContainerTheme = useThemeContext(`${themeName}.innerContainer`, tokens, customTheme)

  const { overlayState } = useSidePanel()

  return (
    <Modal onCloseCallBack={onCloseCallBack} state={overlayState} transitionComponent={PanelTransition}>
      <Div100vh className={wrapperTheme}>
        {closeBtnRender && closeBtnRender()}
        <TransitionAnimation isVisible={overlayState.isOpen}>
          <div className={containerTheme}>
            <div className={innerContainerTheme}>{children}</div>
          </div>
        </TransitionAnimation>
      </Div100vh>
    </Modal>
  )
}

export default React.memo(SidePanel)
