'use client'

import type { ReactNode } from 'react'
import type { TTheme, TThemePanelContext, TThemeProviderProps } from './interface'
import { createCtxNullableStrict } from '@okam/react-utils'
import { useMemo } from 'react'

const defaultTheme: TTheme = {
  typography: () => '',
}

const [useTheme, ThemeProvider] = createCtxNullableStrict<TThemePanelContext<TTheme>>()

export function ThemeContextProvider({ children, brandTheme = defaultTheme }: TThemeProviderProps<TTheme>) {
  const value = useMemo<TThemePanelContext>(() => ({ brandTheme }), [brandTheme])
  return <ThemeProvider value={value}>{children}</ThemeProvider>
}

export function createThemeProvider(brandTheme: TTheme) {
  const ThemeProviderContext = ({ children }: { children: ReactNode }) => (
    <ThemeContextProvider brandTheme={brandTheme}>{children}</ThemeContextProvider>
  )
  return ThemeProviderContext
}

export { useTheme }

export { makeTheme } from './utils'
