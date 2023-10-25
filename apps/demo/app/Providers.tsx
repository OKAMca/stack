'use client'

import { ThemeProvider, IsClientContextProvider, SidePanelContextProvider } from '@okam/stack-ui'
import { OverlayProvider } from 'react-aria'

const Providers = (props: { children: React.ReactNode }) => {
  const { children } = props
  return (
    <ThemeProvider>
      <IsClientContextProvider>
        <OverlayProvider>
          <SidePanelContextProvider defaultSelectedKey="side-panel">{children}</SidePanelContextProvider>
        </OverlayProvider>
      </IsClientContextProvider>
    </ThemeProvider>
  )
}

export default Providers
