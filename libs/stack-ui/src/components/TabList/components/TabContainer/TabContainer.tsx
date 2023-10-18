import React from 'react'
import { useSidePanel } from '../../../../providers/SidePanel'
import TabPanel from '../TabPanel/TabPanel'

const TabContainer = () => {
  const { tabState } = useSidePanel()

  return <TabPanel key={tabState.selectedItem?.key} state={tabState} />
}

export default TabContainer
