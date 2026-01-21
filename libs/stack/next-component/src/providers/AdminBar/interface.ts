import type { Nullable } from '@okam/stack-ui'
import type { ReactNode } from 'react'

export interface TAdminBarProviderProps {
  children: ReactNode
}

export interface TAdminBarContext {
  error: Nullable<Error>
  setError: (_error: Nullable<Error>) => void
}
