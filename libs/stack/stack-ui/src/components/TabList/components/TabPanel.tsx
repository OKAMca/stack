'use client'

import { useTabPanel } from '@react-aria/tabs'
import { useRef } from 'react'
import type { TToken } from '../../../providers/Theme/interface'
import RenderWithOpacity from '../../../transitions/RenderWithOpacity'
import { BoxWithForwardRef } from '../../Box'
import type { TTabPanelProps } from '../interface'

const TabPanel = <I extends object, T extends TToken = TToken>(props: TTabPanelProps<I, T>) => {
  const {
    state,
    customTheme,
    themeName = 'tabList.panel',
    tokens,
    panelTransition: PanelTransition = RenderWithOpacity,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id,
    ...rest
  } = props
  const ref = useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)

  return (
    <PanelTransition
      {...rest}
      themeName={`${themeName}.transition`}
      tokens={tokens}
      customTheme={customTheme}
      isVisible
    >
      <BoxWithForwardRef themeName={`${themeName}.container`} tokens={tokens} {...tabPanelProps} ref={ref}>
        {state.selectedItem?.props.children}
      </BoxWithForwardRef>
    </PanelTransition>
  )
}

export default TabPanel
