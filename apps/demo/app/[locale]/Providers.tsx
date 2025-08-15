'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { I18nProvider } from 'react-aria'

const queryClient = new QueryClient()

const Providers = (props: { children: React.ReactNode; locale: string }) => {
  const { children, locale } = props
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </QueryClientProvider>
  )
}

export default Providers
