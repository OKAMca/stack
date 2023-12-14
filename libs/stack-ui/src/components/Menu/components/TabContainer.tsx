import type { TDefaultComponent } from 'libs/stack-ui/src/types/components'
import { useMenu } from '../../../providers/Menu'
import TabPanel from '../../TabList/components/TabPanel/TabPanel'

const TabContainer = (props: TDefaultComponent) => {
  const { tabState } = useMenu()

  return <TabPanel {...props} key={tabState.selectedItem?.key} state={tabState} />
}

export default TabContainer
