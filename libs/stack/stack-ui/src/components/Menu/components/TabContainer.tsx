'use client'

import { useMenu } from '../../../providers/Menu'
import type { TDefaultComponent } from '../../../types/components'
import TabPanel from '../../TabList/components/TabPanel/TabPanel'

const TabContainer = (props: TDefaultComponent) => {
  const { tabState } = useMenu()

  return <TabPanel {...props} key={tabState.selectedItem?.key} state={tabState} />
}

export default TabContainer
