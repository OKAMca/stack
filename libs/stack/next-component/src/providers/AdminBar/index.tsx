'use client'

import type { Nullable } from '@okam/stack-ui'
import type { TAdminBarContext, TAdminBarProviderProps } from './interface'
import { createCtx } from '@okam/react-utils'
import { useMemo, useState } from 'react'

const adminBarCtx = createCtx<TAdminBarContext>()
export const useAdminBar = adminBarCtx[0]
const AdminBarProvider = adminBarCtx[1]

export function AdminBarContextProvider(props: TAdminBarProviderProps) {
  const { children } = props
  const [error, setError] = useState<Nullable<Error>>()

  const value = useMemo(() => ({ error, setError }), [error])

  return <AdminBarProvider value={value}>{children}</AdminBarProvider>
}
