import type { ReactNode, RefObject } from 'react'
import type { AriaComboBoxOptions } from 'react-aria'
import type { RefCallBack } from 'react-hook-form'
import type { ComboBoxStateOptions } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'
import type { TDefaultNodeComponent } from '../../../types/react-stately'

export type TFieldReactHookForm<T = TToken> = TReactHookForm & Omit<TDefaultComponent<T>, 'children'>

export interface TComboBoxProps<I extends object = object, T extends TToken = TToken>
  extends Omit<TFieldReactHookForm<T>, keyof AriaComboBoxOptions<I>>,
    Omit<AriaComboBoxOptions<I & TDefaultNodeComponent<I, T>>, 'inputRef' | 'buttonRef' | 'popoverRef' | 'listBoxRef'>,
    ComboBoxStateOptions<I & TDefaultNodeComponent<I, T>> {
  hookFormRef?: RefCallBack
  icon?: string | ReactNode
  closeIcon?: string | ReactNode
  errorMessage?: ReactNode
  name: string
  inputRef?: RefObject<HTMLInputElement>
  buttonRef?: RefObject<HTMLButtonElement & HTMLAnchorElement>
  popoverRef?: RefObject<HTMLElement>
  listBoxRef?: RefObject<HTMLElement>
  /**
   * @description Defines in milliseconds the amount of time the items in the listbox have to wait before being updated.
   * @default 200
   */
  debounceDelay?: number
}
