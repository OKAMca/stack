'use client'

import { ThemeProvider } from '@okam/next-component'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
