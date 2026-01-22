import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import type { RefCallBack } from 'react-hook-form'
import type { TCustomTheme, TToken } from '../providers/Theme/interface'

export interface TDefaultComponent<T = TToken> {
  as?: ElementType
  customTheme?: TCustomTheme
  tokens?: T
  themeName?: string | null
  children?: ReactNode
}

export interface TReactHookFormValidity {
  isRequired?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isError?: boolean
  errorMessage?: ReactNode
}

/**
 * Form handler callback types for react-hook-form integration with react-aria components.
 *
 * WHY `any` IS REQUIRED HERE:
 * These handlers accept different value types depending on the component:
 * - TextInputField/TextArea: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 * - Checkbox: boolean (isSelected state)
 * - Select/ComboBox: Key | null (selection key)
 * - Radio: boolean (isSelected state)
 * - ListBox: FocusEvent (onBlur)
 *
 * TypeScript union types for function parameters result in `never` due to contravariance.
 * Example: ((e: Event) => void) | ((b: boolean) => void) becomes ((param: never) => void)
 * This is a fundamental TypeScript limitation, not a code quality issue.
 *
 * Type safety is enforced at each component's implementation level where the actual
 * handler signatures are properly typed (e.g., TextInputField's onChange accepts ChangeEvent).
 *
 * @see https://github.com/microsoft/TypeScript/issues/14107 for contravariance discussion
 */
export type TReactHookForm = TReactHookFormValidity & {
  // eslint-disable-next-line ts/no-explicit-any -- See TReactHookForm JSDoc: react-aria callbacks have incompatible signatures
  onBlur?: (...args: any[]) => void
  // eslint-disable-next-line ts/no-explicit-any -- See TReactHookForm JSDoc: react-aria callbacks have incompatible signatures
  onChange?: (...args: any[]) => void
  fieldRef?: RefCallBack
  min?: string | number | undefined
  max?: string | number | undefined
  maxLength?: number | undefined
  minLength?: number | undefined
  pattern?: string | undefined
  validation?: object
}

export interface TTransition extends TDefaultComponent, HTMLAttributes<HTMLElement> {
  isVisible: boolean
  children: ReactNode
}

export type Nullable<T> = T | undefined | null

export type Maybe<T> = T | null
