import { useTabList } from '@react-aria/tabs'
import { useTabListState } from '@react-stately/tabs'
import { isEmpty } from 'radashi'
import { useRef } from 'react'
import Box, { BoxWithForwardRef } from '../Box'
import Heading from '../Typography'
import Tab from './components/Tab/Tab'
import TabPanel from './components/TabPanel/TabPanel'
import type { TTabList } from './interface'

function TabList(props: TTabList) {
  const { label, id } = props

  const state = useTabListState({
    ...props,
  })

  const ref = useRef(null)
  const { tabListProps } = useTabList(props, state, ref)

  return (
    <Box>
      <Box>
        {!isEmpty(label) && (
          <Box>
            <Box>
              <Heading as="p">{label}</Heading>
            </Box>
          </Box>
        )}
        <BoxWithForwardRef {...tabListProps} ref={ref}>
          {[...state.collection].map((item) => (
            <Box key={`tablist-${id}-${item.key}`}>
              <Tab key={item.key} item={item} state={state} />
            </Box>
          ))}
        </BoxWithForwardRef>
      </Box>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </Box>
  )
}

export default TabList
