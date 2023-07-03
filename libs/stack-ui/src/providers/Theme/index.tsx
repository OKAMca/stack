import React, { useMemo } from 'react'
import type { TThemeProviderProps, TThemePanelContext, TDefaultTheme, TTheme } from './interface'

export function createCtxNullable<A extends Record<string, unknown> | null>() {
  const ctx = React.createContext<A | undefined>(undefined)
  function useCtx() {
    const c = React.useContext(ctx)

    if (c === undefined) {
      return null
    }

    return c
  }
  return [useCtx, ctx.Provider] as const // 'as const' makes TypeScript infer a tuple
}

const defaultTheme: TDefaultTheme = {
  typography: () => '',
}

export const [useTheme, ThemeProvider] = createCtxNullable<TThemePanelContext<TTheme>>()

export function ThemeContextProvider({ children, brandTheme = defaultTheme }: TThemeProviderProps) {
  const value = useMemo<TThemePanelContext>(() => ({ brandTheme }), [brandTheme])
  return <ThemeProvider value={value}>{children}</ThemeProvider>
}

export const createThemeProvider = (brandTheme: TTheme) => {
  const ThemeProviderContext = ({ children }: { children: React.ReactNode }) => (
    <ThemeContextProvider brandTheme={brandTheme}>{children}</ThemeContextProvider>
  )
  return ThemeProviderContext
}

export { makeTheme } from './utils'
