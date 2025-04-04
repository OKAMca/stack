import type { Nullable } from '@okam/stack-ui'
import type { ReactNode } from 'react'

export interface TAdminBarProviderProps {
  children: ReactNode
}

export type TAdminBarContext = {
  error: Nullable<Error>
  setError: (error: Nullable<Error>) => void
}
