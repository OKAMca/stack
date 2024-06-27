import type React from 'react'

export type TPageContext<T extends object> = {
  title: string
  belongToCollection: string
  slug?: string
  path?: string
  state?: T
}

export interface TPageProviderProps<T extends object> {
  children: React.ReactNode
  title: string
  belongToCollection: string
  slug?: string
  path?: string
  state?: T
}
