import type React from 'react'

export type TPageContext<T extends object> = {
  title: string
  collection: string
  slug?: string
  path?: string
  route?: string
  state?: T
}

export interface TPageProviderProps<T extends object> {
  children: React.ReactNode
  title: string
  collection: string
  slug?: string
  path?: string
  route?: string
  state?: T
}
