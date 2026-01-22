import type { ReactNode } from 'react'

export interface TClientProviderProps {
  children: ReactNode
}

export interface TClientProps {
  isClient: boolean
}

export interface TClientContext {
  isClient: boolean
}
