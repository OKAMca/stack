import { useTabPanel } from '@react-aria/tabs'
import React from 'react'
import RenderWithOpacity from '../../../../transitions/RenderWithOpacity'
import type { TTabPanel } from '../../interface'

function TabPanel({ state, ...props }: TTabPanel) {
  const ref = React.useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)

  return (
    <RenderWithOpacity isVisible>
      <div {...tabPanelProps} ref={ref}>
        {state.selectedItem?.props.children}
      </div>
    </RenderWithOpacity>
  )
}

export default TabPanel
