/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { RefCallBack } from 'react-hook-form'
import type { TCustomTheme, TToken } from '../providers/Theme/interface'

export interface TDefaultComponent<T = TToken> {
  as?: React.ElementType<any>
  customTheme?: TCustomTheme
  tokens?: T
  themeName?: string | null
  children?: React.ReactNode
}

export type TReactHookForm = {
  onBlur?: (...event: any[]) => void
  onChange?: (...event: any[]) => void
  fieldRef?: RefCallBack
  min?: string | number | undefined
  max?: string | number | undefined
  maxLength?: number | undefined
  minLength?: number | undefined
  pattern?: string | undefined
  validation?: object
}

export interface TTransition extends TDefaultComponent {
  isVisible: boolean
  children: React.ReactNode
}

export type Nullable<T> = T | undefined | null

export type Maybe<T> = T | null
