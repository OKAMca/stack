import { useTabPanel } from '@react-aria/tabs'
import React from 'react'
import RenderWithOpacity from '../../../../transitions/RenderWithOpacity'
import { BoxWithForwardRef } from '../../../Box'
import type { TTabPanel } from '../../interface'

function TabPanel({ state, ...props }: TTabPanel) {
  const ref = React.useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)

  return (
    <RenderWithOpacity isVisible>
      <BoxWithForwardRef {...tabPanelProps} ref={ref}>
        {state.selectedItem?.props.children}
      </BoxWithForwardRef>
    </RenderWithOpacity>
  )
}

export default TabPanel
