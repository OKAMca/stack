import type { Dispatch, SetStateAction } from 'react'
import type React from 'react'

export type TSearchListingContext = {
  userSearchQuery: string
  setUserSearchQuery: Dispatch<SetStateAction<string>>
}

export interface TSearchProviderProps {
  children: React.ReactNode
  userQuery: string
}
