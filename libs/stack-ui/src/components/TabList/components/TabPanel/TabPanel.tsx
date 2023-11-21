import { useTabPanel } from '@react-aria/tabs'
import type { TDefaultComponent } from 'libs/stack-ui/src/types/components'
import React from 'react'
import RenderWithOpacity from '../../../../transitions/RenderWithOpacity'
import { BoxWithForwardRef } from '../../../Box'
import type { TTabPanel } from '../../interface'

function TabPanel({ state, customTheme, themeName = 'tabPanel', tokens, ...props }: TTabPanel & TDefaultComponent) {
  const ref = React.useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)

  return (
    <RenderWithOpacity isVisible>
      <BoxWithForwardRef
        themeName={`${themeName}`}
        tokens={tokens}
        customTheme={customTheme}
        {...tabPanelProps}
        ref={ref}
      >
        {state.selectedItem?.props.children}
      </BoxWithForwardRef>
    </RenderWithOpacity>
  )
}

export default TabPanel
