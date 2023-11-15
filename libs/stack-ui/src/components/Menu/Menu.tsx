/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'
import { useMenu } from '../../providers/Menu'
import SidePanel from '../SidePanel'
import TabContainer from '../TabList/components/TabContainer/TabContainer'
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
      <div>{children}</div>

      {tabState?.selectedKey?.toString() === defaultSelectedKey ? null : (
        <div>
          {beforeTabContent !== null && beforeTabContent}
          <TabContainer />
        </div>
      )}
    </SidePanel>
  )
}

export default Menu
