'use client'

import type { TMenuSidePanelProps } from './interface'
import { useCallback, useRef } from 'react'
import { useMenu } from '../../providers/Menu'
import SidePanel from '../SidePanel'
import InnerContent from './components/InnerContent'

function MenuSidePanel(props: TMenuSidePanelProps) {
  const {
    id = 'main-menu',
    children,
    TransitionAnimation,
    PanelTransition,
    themeName,
    tokens,
    customTheme,
    ...rest
  } = props
  const { closeBtn, tabState, defaultSelectedKey } = useMenu()

  // Use refs to avoid infinite loop: tabState changes when setSelectedKey is called,
  // which would recreate the callback if tabState were a dependency
  const tabStateRef = useRef(tabState)
  const defaultSelectedKeyRef = useRef(defaultSelectedKey)
  tabStateRef.current = tabState
  defaultSelectedKeyRef.current = defaultSelectedKey

  const handleOpenChange = useCallback((isOpen: boolean) => {
    if (!isOpen) {
      tabStateRef.current?.setSelectedKey(defaultSelectedKeyRef.current)
    }
  }, [])

  return (
    <SidePanel
      themeName={`${themeName}.sidePanel`}
      tokens={tokens}
      customTheme={customTheme}
      closeBtnRender={closeBtn}
      id={id}
      TransitionAnimation={TransitionAnimation}
      PanelTransition={PanelTransition}
      onOpenChange={handleOpenChange}
    >
      <InnerContent id={id} themeName={themeName} tokens={tokens} customTheme={customTheme} {...rest}>
        {children}
      </InnerContent>
    </SidePanel>
  )
}

export default MenuSidePanel
