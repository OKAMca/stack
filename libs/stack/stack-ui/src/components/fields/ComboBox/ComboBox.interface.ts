/* eslint-disable no-unused-vars, @typescript-eslint/naming-convention */
import type { TDefaultComponent } from '@okam/stack-ui'
import type { AriaListBoxOptions } from '@react-aria/listbox'
import type { ComboBoxState } from '@react-stately/combobox'
import type { ComboBoxProps } from '@react-types/combobox'
import type { AriaDialogProps } from '@react-types/dialog'
import type { LoadingState, Node } from '@react-types/shared'
import type React from 'react'
import 'twin.macro'
import type { SEARCH_POST_TYPE_FILTER } from '../../../searchQuery/searchQuery.interface'

export type ComboBoxVariant = 'gray'
export type PopoverOrientation = 'left' | 'right'

export interface TItemsElementsProps {
  ID: string
  post_title: string
}

export interface TButtonIcon {
  value: string
  list: Array<TItemsElementsProps>
}
export interface TComboBoxWrapperProps extends ComboBoxProps<object> {
  label?: string
  description?: string
  sectionLabel?: string
  variant?: ComboBoxVariant
  orientation?: PopoverOrientation
  placeholder: string
  presetPostTypeFilter?: SEARCH_POST_TYPE_FILTER
  selectedBrand?: string
  loadingState?: LoadingState
  onInputChange?: React.Dispatch<React.SetStateAction<string>>
  onBlur?: ((e: React.FocusEvent<HTMLInputElement>) => void) | undefined
  onCollectionChange?: (e: ComboBoxState<object>) => void
}

export interface TComboBoxProps extends Omit<TComboBoxWrapperProps, 'children'>, TDefaultComponent {
  isDisabled?: boolean
}

export interface TComboBoxSelectProps {
  label: string
  variant?: ComboBoxVariant
  orientation?: PopoverOrientation
  onChange?: () => void
}

export interface TPopoverProps extends AriaDialogProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  variant: ComboBoxVariant
  orientation: PopoverOrientation
  popoverRef?: React.RefObject<HTMLDivElement>
  triggerRef?: React.RefObject<HTMLDivElement>
  state: ComboBoxState<object>
}

export interface TListBoxProps extends AriaListBoxOptions<object> {
  listBoxRef?: React.RefObject<HTMLUListElement>
  state: ComboBoxState<object>
  listLabel: string
}

export interface TSectionProps {
  section: Node<object>
  state: ComboBoxState<object>
}
export interface TOptionProps {
  item: Node<object>
  state: ComboBoxState<object>
}
