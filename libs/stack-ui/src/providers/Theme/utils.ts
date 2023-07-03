import type { TToken, ITheme, TTheme } from './interface'

type ThemeFn = (props: TToken) => ITheme

export const makeTheme = (theme: TTheme) => theme
