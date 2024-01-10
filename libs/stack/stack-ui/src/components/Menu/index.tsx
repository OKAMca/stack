'use client'

import { useMenu } from '../../providers/Menu'
import Box from '../Box'
import SidePanel from '../SidePanel'
import TabContainer from './components/TabContainer'
import type TMenuProps from './interface'

const Menu = ({
  id = 'main-menu',
  children,
  beforeTabContent,
  TransitonAnimation,
  PanelTransition,
  themeName,
  tokens,
  customTheme,
}: TMenuProps) => {
  const { closeBtn, tabState, defaultSelectedKey } = useMenu()

  return (
    <SidePanel
      themeName={`${themeName}.sidePanel`}
      tokens={tokens}
      customTheme={customTheme}
      closeBtnRender={closeBtn}
      id={id}
      TransitionAnimation={TransitonAnimation as (props: unknown) => JSX.Element}
      PanelTransition={PanelTransition as (props: unknown) => JSX.Element}
      onCloseCallBack={() => {
        tabState?.setSelectedKey(defaultSelectedKey)
      }}
    >
      <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme}>
        {children}
      </Box>

      {tabState?.selectedKey?.toString() === defaultSelectedKey ? null : (
        <Box themeName={`${themeName}.tabWrapper`} tokens={tokens} customTheme={customTheme}>
          {beforeTabContent !== null && beforeTabContent}
          <TabContainer themeName={`${themeName}.tabPanel`} tokens={tokens} customTheme={customTheme} />
        </Box>
      )}
    </SidePanel>
  )
}

export default Menu
