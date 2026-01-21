'use client'

import type { TDefaultComponent } from '../../../types/components'
import { useMenu } from '../../../providers/Menu'
import TabPanel from '../../TabList/components/TabPanel'

function TabContainer(props: TDefaultComponent) {
  const { tabState } = useMenu()

  return <TabPanel key={tabState.selectedItem?.key} {...props} state={tabState} />
}

export default TabContainer
