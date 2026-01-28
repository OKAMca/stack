'use client'

import type { TClientContext, TClientProps, TClientProviderProps } from './interface'
import { createCtx } from '@okam/react-utils'
import { useEffect, useMemo, useState } from 'react'

const [useIsClient, IsClientProvider] = createCtx<TClientProps>()

export { useIsClient }

export function IsClientContextProvider({ children }: TClientProviderProps) {
  const [isClient, setIsClient] = useState(false)

  // Client-side detection pattern: useEffect only runs on client after hydration
  // This is the standard React pattern for detecting client vs server environment
  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect -- client detection pattern
    setIsClient(true)
  }, [])

  const value = useMemo<TClientContext>(() => ({ isClient }), [isClient])

  return <IsClientProvider value={value}>{children}</IsClientProvider>
}
