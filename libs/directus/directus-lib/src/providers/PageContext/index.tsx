'use client'

import { createCtxNullable } from '@okam/core-lib'
import { useMemo } from 'react'
import type { TPageContext, TPageProviderProps } from './interface'

export const [usePageCtx, PageProvider] = createCtxNullable<TPageContext<T> | null>()

export const PageContextProvider = <T extends object>(props: TPageProviderProps<T>) => {
  const { children, ...rest } = props

  const value = useMemo<TPageContext<T>>(() => rest, [rest])

  return <PageProvider value={value}>{children}</PageProvider>
}
