'use client'

import { createCtx } from '@okam/core-lib'
import type { Nullable } from '@okam/stack-ui'
import { useMemo, useState } from 'react'
import type { TAdminBarContext, TAdminBarProviderProps } from './interface'

export const [useAdminBar, AdminBarProvider] = createCtx<TAdminBarContext>()

export function AdminBarContextProvider(props: TAdminBarProviderProps) {
  const { children } = props
  const [error, setError] = useState<Nullable<Error>>()

  const value = useMemo(() => ({ error, setError }), [error])

  return <AdminBarProvider value={value}>{children}</AdminBarProvider>
}
