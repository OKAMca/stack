'use client'

import { createCtx } from '@okam/core-lib'
import { useEffect, useMemo, useState } from 'react'
import type { TClientContext, TClientProps, TClientProviderProps } from './interface'

export const [useIsClient, IsClientProvider] = createCtx<TClientProps>()

export function IsClientContextProvider({ children }: TClientProviderProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const value = useMemo<TClientContext>(() => ({ isClient }), [isClient])

  return <IsClientProvider value={value}>{children}</IsClientProvider>
}
