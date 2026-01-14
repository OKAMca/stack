'use client'

import { ThemeProvider, IsClientContextProvider, SidePanelContextProvider } from '@okam/stack-ui'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { OverlayProvider } from 'react-aria'

const Providers = (props: { children: React.ReactNode }) => {
  const { children } = props
  return (
    <ThemeProvider>
      <IsClientContextProvider>
        <OverlayProvider>
          <SidePanelContextProvider defaultSelectedKey="side-panel">
            <NuqsAdapter>{children}</NuqsAdapter>
          </SidePanelContextProvider>
        </OverlayProvider>
      </IsClientContextProvider>
    </ThemeProvider>
  )
}

export default Providers
