'use client'

import type { TToken } from '../../providers/Theme/interface'
import type { TTabListProps } from './interface'
import { useRef } from 'react'
import { useTabList } from 'react-aria'
import { useTabListState } from 'react-stately'
import RenderWithOpacity from '../../transitions/RenderWithOpacity'
import { Box, BoxWithForwardRef } from '../Box'
import Tab from './components/Tab'
import TabPanel from './components/TabPanel'

function TabList<I extends object, T extends TToken = TToken>(props: TTabListProps<I, T>) {
  const {
    themeName = 'tabList',
    tokens,
    customTheme,
    label,
    orientation = 'horizontal',
    panelTransition: PanelTransition = RenderWithOpacity,
  } = props

  const state = useTabListState(props)

  const ref = useRef(null)
  const { tabListProps } = useTabList(props, state, ref)

  const tabListTokens = {
    ...tokens,
    orientation,
    isDisabled: state.isDisabled,
  }

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tabListTokens} customTheme={customTheme}>
      {label != null && label !== '' && (
        <Box themeName={`${themeName}.label`} tokens={tabListTokens}>
          {label}
        </Box>
      )}
      <Box themeName={`${themeName}.container`} tokens={tabListTokens}>
        <BoxWithForwardRef themeName={`${themeName}.list`} tokens={tabListTokens} {...tabListProps} ref={ref}>
          {[...state.collection].map(item => (
            <Tab
              key={item.key}
              item={item}
              state={state}
              themeName={`${themeName}.tab`}
              tokens={{ ...tokens, orientation }}
            />
          ))}
        </BoxWithForwardRef>
        <TabPanel
          key={state.selectedItem?.key}
          state={state}
          themeName={`${themeName}.panel`}
          tokens={tabListTokens}
          panelTransition={PanelTransition}
        />
      </Box>
    </Box>
  )
}

export default TabList
