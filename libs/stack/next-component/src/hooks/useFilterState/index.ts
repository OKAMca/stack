'use client'

import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs'
import { useMemo } from 'react'
import { useListState, type Selection } from 'react-stately'
import { useUpdateEffect } from 'react-use'
import type { TFilter } from './interface'

/**
 * Manages the selection state of a single filter.
 * The state is managed by `useListState` from `react-stately`, which controls `useQueryState` from `nuqs` to display the selected keys in the URL search params.
 */
export function useFilterState(props: TFilter) {
  const {
    id,
    defaultSelectedKeys: defaultSelectedKeysProp = [],
    onSelectionChange,
    selectionMode = 'multiple',
    parser = parseAsArrayOf(parseAsString),
    children,
    items,
    options,
    ...rest
  } = props

  const defaultValue = Array.from(defaultSelectedKeysProp).map((key) => key.toString())
  const queryStateOptions = useMemo(
    () => parser.withOptions(options ?? {}).withDefault(defaultValue),
    [parser, options, defaultValue],
  )

  const [selectedKeys, setSelectedKeys] = useQueryState(id, queryStateOptions)

  const onSelectedKeysChange = (keys: Selection) => {
    onSelectionChange?.(keys)
    const stringKeys = Array.from(keys).map((key) => key.toString())
    setSelectedKeys(stringKeys)
  }

  const defaultSelectedKeys = new Set([...defaultSelectedKeysProp, ...(selectedKeys ?? [])])

  const state = useListState({
    ...rest,
    children,
    items,
    selectionMode,
    defaultSelectedKeys,
    onSelectionChange: onSelectedKeysChange,
  })

  useUpdateEffect(() => {
    const stringKeys = Array.from(state.selectionManager.selectedKeys).map((key) => key.toString())
    setSelectedKeys(stringKeys)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.selectionManager.selectedKeys])

  return { ...state, onSelectionChange: onSelectedKeysChange, selectedKeys, defaultSelectedKeys }
}
