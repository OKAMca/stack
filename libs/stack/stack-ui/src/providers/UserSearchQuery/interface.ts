import type { Dispatch, SetStateAction } from 'react'
import type * as React from 'react'

export interface TSearchListingContext {
  userSearchQuery: string
  setUserSearchQuery: Dispatch<SetStateAction<string>>
}

export interface TSearchProviderProps {
  children: React.ReactNode
  userQuery: string
}
