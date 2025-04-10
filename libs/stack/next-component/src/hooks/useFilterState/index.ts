'use client'

import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs'
import { useEffect } from 'react'
import { useListState, type Selection } from 'react-stately'
import type { TFilter } from './interface'

/**
 * Manages the selection state of a single filter.
 * The state is managed by `useListState` from `react-stately`, which controls `useQueryState` from `nuqs` to display the selected keys in the URL search params.
 */
export function useFilterState(props: TFilter) {
  const {
    id,
    defaultSelectedKeys = [],
    onSelectionChange,
    selectionMode = 'multiple',
    parser = parseAsArrayOf(parseAsString),
    children,
    items,
    ...rest
  } = props

  const defaultValue = Array.from(defaultSelectedKeys).map((key) => key.toString())
  const queryStateOptions = parser.withDefault(defaultValue).withOptions(props)

  const [selectedKeys, setSelectedKeys] = useQueryState(id, queryStateOptions)

  const onSelectedKeysChange = (keys: Selection) => {
    onSelectionChange?.(keys)
    const stringKeys = Array.from(keys).map((key) => key.toString())
    setSelectedKeys(stringKeys)
  }

  const state = useListState({
    ...rest,
    children,
    items,
    selectionMode,
    defaultSelectedKeys,
    onSelectionChange: onSelectedKeysChange,
  })

  useEffect(() => {
    const stringKeys = Array.from(state.selectionManager.selectedKeys).map((key) => key.toString())
    setSelectedKeys(stringKeys)
  }, [setSelectedKeys, state.selectionManager.selectedKeys])

  return { ...state, onSelectionChange: onSelectedKeysChange, selectedKeys }
}
