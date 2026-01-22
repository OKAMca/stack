import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface TSearchListingContext {
  userSearchQuery: string
  setUserSearchQuery: Dispatch<SetStateAction<string>>
}

export interface TSearchProviderProps {
  children: ReactNode
  userQuery: string
}
