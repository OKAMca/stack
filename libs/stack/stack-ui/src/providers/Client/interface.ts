import type React from 'react'

export type TClientProviderProps = {
  children: React.ReactNode
}

export type TClientProps = {
  isClient: boolean
}

export type TClientContext = {
  isClient: boolean
}
