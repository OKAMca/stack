/**
 * useAccordionState - Custom hook wrapping react-stately's useTreeState
 *
 * Uses React.Children.forEach to iterate over accordion item children
 * to extract keys and default expanded states.
 *
 * @see https://react-spectrum.adobe.com/react-stately/useTreeState.html
 * @see docs/ADR/005_react-stately-eslint-exceptions.md
 */

import type { ReactNode } from 'react'
import type { Key, Selection } from 'react-stately'
import type { AccordionProps, TAccordionItemProps, TAccordionState } from '../interface'
import { Children, isValidElement } from 'react'
import { useDisclosureGroupState, useTreeState } from 'react-stately'

/**
 * Collects the keys of the accordion items, as react-stately's collection builder assigns them:
 * the element's own `key`, or `$.<index>` for items without one.
 *
 * `Children.toArray` cannot be used here: it prefixes keys (`.$item-1`), so they would never match
 * the collection keys and `defaultOpen` would silently do nothing.
 */
function getItemKeys(children: ReactNode) {
  const allKeys: Key[] = []
  const defaultOpenKeys: Key[] = []
  let index = 0

  Children.forEach(children, (child) => {
    // Mirror CollectionBuilder: falsy children are skipped and do not consume an index
    if (child == null || child === false || child === '' || child === 0)
      return
    const key = isValidElement(child) && child.key != null ? child.key : `$.${index}`
    index++
    allKeys.push(key)
    if (isValidElement<TAccordionItemProps>(child) && child.props.defaultOpen === true)
      defaultOpenKeys.push(key)
  })

  return { allKeys, defaultOpenKeys }
}

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

  const { allKeys, defaultOpenKeys: fallbackDefaultOpenKeys } = getItemKeys(children)

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
