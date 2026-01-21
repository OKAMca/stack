'use client'

import type { TSearchListingContext, TSearchProviderProps } from './interface'
import { createCtx } from '@okam/core-lib'
import { useMemo, useState } from 'react'

const searchCtx = createCtx<TSearchListingContext>()
export const useUserQueryValHook = searchCtx[0]
const SearchProvider = searchCtx[1]

export function SearchBarProvider(props: TSearchProviderProps) {
  const { userQuery, children } = props

  const [userVal, setUserVal] = useState(userQuery)

  const value = useMemo<TSearchListingContext>(
    () => ({ userSearchQuery: userVal, setUserSearchQuery: setUserVal }),
    [userVal, setUserVal],
  )

  return <SearchProvider value={value}>{children}</SearchProvider>
}
