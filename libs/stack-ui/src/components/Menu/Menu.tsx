import { useMenu } from '../../providers/Menu'
import Box from '../Box'
import SidePanel from '../SidePanel'
import TabContainer from './components/TabContainer'
import type TMenuProps from './Menu.interface'

const Menu = ({ id = 'main-menu', children, beforeTabContent, TransitonAnimation }: TMenuProps) => {
  const { closeBtn, tabState, defaultSelectedKey } = useMenu()

  return (
    <SidePanel
      closeBtnRender={closeBtn}
      id={id}
      TransitionAnimation={TransitonAnimation as (props: unknown) => JSX.Element}
      onCloseCallBack={() => {
        tabState?.setSelectedKey(defaultSelectedKey)
      }}
    >
      <Box>{children}</Box>

      {tabState?.selectedKey?.toString() === defaultSelectedKey ? null : (
        <Box>
          {beforeTabContent !== null && beforeTabContent}
          <TabContainer />
        </Box>
      )}
    </SidePanel>
  )
}

export default Menu
