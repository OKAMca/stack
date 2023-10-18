/* eslint-disable no-unused-vars */
import { useTabList } from '@react-aria/tabs'
import { useTabListState } from '@react-stately/tabs'
import { isEmpty } from 'lodash'
import React, { useRef } from 'react'
import Heading from '../Typography'
import Tab from './components/Tab/Tab'
import TabPanel from './components/TabPanel/TabPanel'
import type { TTabList } from './interface'
import { StyledLabel, StyledNav, StyledTabContainer } from './TabList.styles'

function TabList(props: TTabList) {
  const { label, id } = props

  const state = useTabListState({
    ...props,
  })

  const ref = useRef(null)
  const { tabListProps } = useTabList(props, state, ref)

  return (
    <section>
      <div tw="flex flex-col md:flex-row">
        {!isEmpty(label) && (
          <div>
            <StyledLabel>
              <Heading as="p" variant="h5" tw="mb-0 lg:mb-0">
                {label}
              </Heading>
            </StyledLabel>
          </div>
        )}
        <StyledNav {...tabListProps} ref={ref}>
          {[...state.collection].map((item) => (
            <StyledTabContainer key={`tablist-${id}-${item.key}`}>
              <Tab key={item.key} item={item} state={state} />
            </StyledTabContainer>
          ))}
        </StyledNav>
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </section>
  )
}

export default TabList
