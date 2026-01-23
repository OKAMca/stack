'use client'

import type { SelectionManager } from '@react-stately/selection'
import type { Collection, Key, Node, Selection } from 'react-stately'
import type { TFilter, TFilterItem } from './interface'
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'
import { isEqual } from 'radashi'
import { useMemo } from 'react'
import { useListState } from 'react-stately'
import { useUpdateEffect } from 'react-use'

export interface UseFilterStateReturn {
  collection: Collection<Node<TFilterItem>>
  disabledKeys: Set<Key>
  selectionManager: SelectionManager
  onSelectionChange: (keys: Selection) => void
  selectedKeys: string[] | undefined
  defaultSelectedKeys: Set<Key | string>
}

/**
 * Manages the selection state of a single filter.
 * The state is managed by `useListState` from `react-stately`, which controls `useQueryState` from `nuqs` to display the selected keys in the URL search params.
 */
export function useFilterState(props: TFilter): UseFilterStateReturn {
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

  const defaultValue = Array.from(defaultSelectedKeysProp).map(key => key.toString())
  const queryStateOptions = useMemo(
    () => parser.withOptions(options ?? {}).withDefault(defaultValue),
    [parser, options, defaultValue],
  )

  const [selectedKeys, setSelectedKeys] = useQueryState(id, queryStateOptions)

  const onSelectedKeysChange = (keys: Selection) => {
    onSelectionChange?.(keys)
    const stringKeys = Array.from(keys).map(key => key.toString())
    void setSelectedKeys(stringKeys)
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

  // Sync react-stately selection state to URL query state.
  // This is a bidirectional sync: URL -> useListState (via defaultSelectedKeys) and
  // useListState -> URL (via this effect). The isEqual check prevents infinite loops.
  useUpdateEffect(() => {
    const next = [...state.selectionManager.selectedKeys].map(String)
    if (isEqual(next, selectedKeys)) {
      return
    }
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect -- intentional state sync: URL query state must mirror react-stately selection state, guarded by isEqual check
    void setSelectedKeys(next)
  }, [state.selectionManager.selectedKeys])

  return { ...state, onSelectionChange: onSelectedKeysChange, selectedKeys: selectedKeys ?? undefined, defaultSelectedKeys }
}
