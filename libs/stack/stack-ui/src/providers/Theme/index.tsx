'use client'

import type { TTheme, TThemePanelContext, TThemeProviderProps } from './interface'
import * as React from 'react'
import { useMemo } from 'react'

export function createCtxNullable<A extends object | null>() {
  const ctx = React.createContext<A | undefined>(undefined)
  function useCtx() {
    const c = React.use(ctx)

    if (c === undefined) {
      return null
    }

    return c
  }
  return [useCtx, ctx.Provider] as const // 'as const' makes TypeScript infer a tuple
}

const defaultTheme: TTheme = {
  typography: () => '',
}

const [useTheme, ThemeProvider] = createCtxNullable<TThemePanelContext<TTheme>>()

export function ThemeContextProvider({ children, brandTheme = defaultTheme }: TThemeProviderProps<TTheme>) {
  const value = useMemo<TThemePanelContext>(() => ({ brandTheme }), [brandTheme])
  return <ThemeProvider value={value}>{children}</ThemeProvider>
}

export function createThemeProvider(brandTheme: TTheme) {
  const ThemeProviderContext = ({ children }: { children: React.ReactNode }) => (
    <ThemeContextProvider brandTheme={brandTheme}>{children}</ThemeContextProvider>
  )
  return ThemeProviderContext
}

export { useTheme }

export { makeTheme } from './utils'
