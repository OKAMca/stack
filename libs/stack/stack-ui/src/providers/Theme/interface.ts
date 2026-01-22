import type { ReactNode } from 'react'

export type TStyleValue = false | string
export type TToken = Record<string, string | boolean>
export type TFunc = (_props: TToken) => TStyleValue[] | string
export interface TTheme { [key: string]: TFunc | TTheme }

export type TStyle = Record<string, TStyleValue>
export type TCustomTheme = TStyleValue | null | undefined
export type TStyleCollection = Record<string, TStyle>

export interface TDefaultTheme {
  typography: (_props: TToken) => TStyleValue[] | string
}

export interface TThemeProviderProps<T = TTheme> {
  children: ReactNode
  brandTheme?: T
}

export interface TThemePanelContext<T = TTheme> {
  brandTheme: T
}

export interface ITheme {
  defaultTokens: TToken
  styles: TStyleCollection
}
