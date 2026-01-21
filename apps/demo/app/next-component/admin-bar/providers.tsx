'use client'

import type { ReactNode } from 'react'
import { AdminBarContextProvider } from '@okam/next-component'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function AdminBarProviders({ children }: { children: ReactNode }) {
  // Create a client
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <AdminBarContextProvider>{children}</AdminBarContextProvider>
    </QueryClientProvider>
  )
}
