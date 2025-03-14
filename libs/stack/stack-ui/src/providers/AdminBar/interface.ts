import type { ReactNode } from 'react'
import type { Nullable } from '../../types/components'

export interface TAdminBarProviderProps {
  children: ReactNode
}

export type TAdminBarContext = {
  error: Nullable<Error>
  setError: (error: Nullable<Error>) => void
}
