import { useMenu } from '../../../providers/Menu'
import TabPanel from '../../TabList/components/TabPanel/TabPanel'

const TabContainer = () => {
  const { tabState } = useMenu()

  return <TabPanel key={tabState.selectedItem?.key} state={tabState} />
}

export default TabContainer
