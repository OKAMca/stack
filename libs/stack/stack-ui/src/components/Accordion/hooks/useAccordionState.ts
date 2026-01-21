/**
 * useAccordionState - Custom hook wrapping react-stately's useTreeState
 *
 * Uses React.Children.toArray to safely iterate over accordion item children
 * to extract keys and default expanded states.
 *
 * @see https://react-spectrum.adobe.com/react-stately/useTreeState.html
 * @see docs/ADR/005_react-stately-eslint-exceptions.md
 */

import type { ReactElement } from 'react'
import type { Selection } from 'react-stately'
import type { AccordionProps, TAccordionItemProps, TAccordionState } from '../interface'
import { Children, isValidElement } from 'react'
import { useDisclosureGroupState, useTreeState } from 'react-stately'

/**
 * Wraps react stately's `useTreeState` hook while automatically setting expanded keys props
 * to selected keys props for convenience.
 *
 * Also sets `defaultSelectedKeys` and `defaultExpandedKeys` based on the children's props
 *
 * If the expanded keys props are set, they will act like the regular `useTreeState` hook
 */
export default function useAccordionState(params: AccordionProps): TAccordionState {
  const {
    children,
    defaultSelectedKeys: propDefaultSelectedKeys,
    selectionMode = 'single',
    selectedKeys,
    onSelectionChange,
    ...rest
  } = params

  const childrenArray = Children.toArray(children).filter(isValidElement) as Array<ReactElement<TAccordionItemProps>>
  const allKeys = childrenArray
    .map(child => child.key)
    .filter((key): key is NonNullable<typeof key> => key != null)

  const fallbackDefaultOpenKeys = childrenArray.reduce<NonNullable<typeof allKeys>>((openKeys, item) => {
    const { props: itemProps, key } = item
    const { defaultOpen } = itemProps ?? {}
    if (!defaultOpen || key == null)
      return openKeys
    openKeys.push(key)
    return openKeys
  }, [])

  const resolvedExpandedKeys = selectedKeys === 'all' ? allKeys : selectedKeys
  const resolvedDefaultExpandedKeys = propDefaultSelectedKeys === 'all'
    ? allKeys
    : propDefaultSelectedKeys ?? fallbackDefaultOpenKeys

  const disclosureState = useDisclosureGroupState({
    allowsMultipleExpanded: selectionMode === 'multiple',
    expandedKeys: resolvedExpandedKeys,
    defaultExpandedKeys: resolvedDefaultExpandedKeys,
    onExpandedChange: keys => onSelectionChange?.(keys),
  })

  const handleSelectionChange = (keys: Selection) => {
    if (keys === 'all') {
      disclosureState.setExpandedKeys(new Set(allKeys))
      return
    }
    disclosureState.setExpandedKeys(new Set(keys))
  }

  const state = useTreeState({
    ...rest,
    children,
    selectionMode,
    expandedKeys: disclosureState.expandedKeys,
    selectedKeys: disclosureState.expandedKeys,
    onSelectionChange: handleSelectionChange,
  })

  return {
    collection: state.collection,
    disabledKeys: state.disabledKeys,
    selectionManager: state.selectionManager,
    expandedKeys: disclosureState.expandedKeys,
    toggleKey: disclosureState.toggleKey,
    setExpandedKeys: disclosureState.setExpandedKeys,
    allowsMultipleExpanded: disclosureState.allowsMultipleExpanded,
    isDisabled: disclosureState.isDisabled,
  }
}
