import type React from 'react'

export type TStyleValue = false | string
export type TToken = Record<string, string | boolean>
export type TFunc = (props: TToken) => TStyleValue[] | string
export type TThemeRecord = Record<string, TFunc>
export type TTheme = Record<string, TFunc | TThemeRecord>

export type TStyle = Record<string, TStyleValue>
export type TCustomTheme = TStyleValue[] | null | undefined
export type TStyleCollection = Record<string, TStyle>

export type TDefaultTheme = {
  typography: (props: TToken) => TStyleValue[] | string
}

export type TThemeProviderProps<T = TTheme> = {
  children: React.ReactNode
  brandTheme?: T
}

export type TThemePanelContext<T = TTheme> = {
  brandTheme: T
}

export interface ITheme {
  defaultTokens: TToken
  styles: TStyleCollection
}
