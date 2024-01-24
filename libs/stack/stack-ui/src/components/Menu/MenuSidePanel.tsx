'use client'

import { useMenu } from '../../providers/Menu'
import SidePanel from '../SidePanel'
import InnerContent from './components/InnerContent'
import type TMenuProps from './interface'

const MenuSidePanel = (props: TMenuProps) => {
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
      TransitionAnimation={TransitionAnimation as (props: unknown) => JSX.Element}
      PanelTransition={PanelTransition as (props: unknown) => JSX.Element}
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
