import type * as React from 'react'

export interface TClientProviderProps {
  children: React.ReactNode
}

export interface TClientProps {
  isClient: boolean
}

export interface TClientContext {
  isClient: boolean
}
