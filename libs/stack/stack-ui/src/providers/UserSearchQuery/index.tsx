'use client'

import { createCtx } from '@okam/core-lib'
import { useMemo, useState } from 'react'
import type { TSearchListingContext, TSearchProviderProps } from './interface'

export const [useUserQueryValHook, SearchProvider] = createCtx<TSearchListingContext>()

export function SearchBarProvider(props: TSearchProviderProps) {
  const { userQuery, children } = props

  const [userVal, setUserVal] = useState(userQuery)

  const value = useMemo<TSearchListingContext>(
    () => ({ userSearchQuery: userVal, setUserSearchQuery: setUserVal }),
    [userVal, setUserVal],
  )

  return <SearchProvider value={value}>{children}</SearchProvider>
}
