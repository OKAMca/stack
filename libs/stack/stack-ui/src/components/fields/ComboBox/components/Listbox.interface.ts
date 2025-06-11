/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { AriaListBoxOptions, AriaOptionProps } from 'react-aria'
import type { ComboBoxState } from 'react-stately'
import type { TDefaultComponent } from '../../../../types/components'

export interface TListBoxProps extends AriaListBoxOptions<unknown>, TDefaultComponent {
  listBoxRef?: React.RefObject<any>
  state: ComboBoxState<unknown>
  optionsWithHeaders?: { key: string; value: string }[]
}

export interface TOptionProps extends AriaOptionProps, TDefaultComponent {
  item: any
  state: ComboBoxState<unknown>
}

export type Item = {
  key: React.Key
  rendered: string
}

export type Section = {
  header?: Item
  items: Item[]
}
