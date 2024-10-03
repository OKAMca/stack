'use client'

import { useMenu } from '../../providers/Menu'
import SidePanel from '../SidePanel'
import InnerContent from './components/InnerContent'
import type { TMenuSidePanelProps } from './interface'

const MenuSidePanel = (props: TMenuSidePanelProps) => {
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

  return (
    <SidePanel
      themeName={`${themeName}.sidePanel`}
      tokens={tokens}
      customTheme={customTheme}
      closeBtnRender={closeBtn}
      id={id}
      TransitionAnimation={TransitionAnimation}
      PanelTransition={PanelTransition}
      onCloseCallBack={() => {
        tabState?.setSelectedKey(defaultSelectedKey)
      }}
    >
      <InnerContent id={id} themeName={themeName} tokens={tokens} customTheme={customTheme} {...rest}>
        {children}
      </InnerContent>
    </SidePanel>
  )
}

export default MenuSidePanel
