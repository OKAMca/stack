'use client'

import { ThemeProvider, IsClientContextProvider, SidePanelContextProvider } from '@okam/stack-ui'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { OverlayProvider } from 'react-aria'

const Providers = (props: { children: React.ReactNode }) => {
  const { children } = props
  return (
    <ThemeProvider>
      <NuqsAdapter>
        <IsClientContextProvider>
          <OverlayProvider>
            <SidePanelContextProvider defaultSelectedKey="side-panel">{children}</SidePanelContextProvider>
          </OverlayProvider>
        </IsClientContextProvider>
      </NuqsAdapter>
    </ThemeProvider>
  )
}

export default Providers
