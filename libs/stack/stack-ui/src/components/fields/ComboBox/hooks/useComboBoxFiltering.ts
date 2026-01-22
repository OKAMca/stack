'use client'

import type { ReactElement } from 'react'
import type { TDefaultItemComponent, TDefaultSectionComponent } from '../../../../types/react-stately'
import { createElement, useMemo, useState } from 'react'
import { Node } from '../../../Node'

// Simple input type for sections without render functions
interface SimpleSectionData<T extends object = object> {
  key: string
  title?: string
  items: Array<TDefaultItemComponent<T>>
}

// Complex type for sections with render functions (after transformation)
type SectionWithItems<T extends object = object> = TDefaultSectionComponent<T> & {
  items?: Array<TDefaultItemComponent<T>>
  children?: (_props: TDefaultItemComponent<T>) => ReactElement
}

type FlatListItem<T extends object = object> = TDefaultItemComponent<T>

/**
 * Hook for handling automatic filtering of ComboBox structures
 * Supports both flat lists and sections with rendering functions
 * Automatically transforms simple section data into complex structures
 */
export function useComboBoxFiltering<T extends object = object>(
  items: Array<SimpleSectionData<T> | FlatListItem<T>> | undefined,
  controlledInputValue?: string,
  controlledOnInputChange?: (_value: string) => void,
) {
  const [internalInputValue, setInternalInputValue] = useState('')

  // Detect the type of structure and transform if needed
  const processedItems = useMemo(() => {
    if (items == null || items.length === 0)
      return items

    const itemsArray = Array.from(items)

    // Check if this is simple sections (items have 'items' array but no 'children' function)
    const hasSimpleSections = itemsArray.some(
      item => 'items' in item && Array.isArray(item.items) && !('children' in item),
    )

    if (hasSimpleSections) {
      // Transform simple sections to complex sections with render functions
      return (items as SimpleSectionData<T>[]).map(section => ({
        ...section,
        children: ({ key, children, ...item }: TDefaultItemComponent<T>) =>
          createElement(Node, { key, ...item }, children),
      }))
    }

    return items
  }, [items])

  // Detect the type of structure we're dealing with (after transformation)
  const structureType = useMemo(() => {
    if (processedItems == null || processedItems.length === 0)
      return 'none'

    const itemsArray = Array.from(processedItems)

    // Check if this is sections (items have 'items' array and 'children' function)
    const hasSections = itemsArray.some(
      item =>
        'items' in item && Array.isArray(item.items) && 'children' in item && typeof item.children === 'function',
    )

    if (hasSections)
      return 'sections'

    // Check if this is flat list (items have 'children' property but no 'items' array)
    const isFlatList = itemsArray.some(
      item => 'children' in item && typeof item.children === 'string' && !('items' in item),
    )

    if (isFlatList)
      return 'flatList'

    return 'none'
  }, [processedItems])

  // Use controlled inputValue if provided, otherwise use internal state for structures that need filtering
  const needsFiltering = structureType !== 'none'
  const effectiveInputValue = controlledInputValue ?? (needsFiltering ? internalInputValue : undefined)
  const effectiveOnInputChange = controlledOnInputChange ?? (needsFiltering ? setInternalInputValue : undefined)

  // Filter items based on structure type
  const filteredItems = useMemo(() => {
    if (!needsFiltering || processedItems == null || (effectiveInputValue == null || effectiveInputValue === '')) {
      return processedItems
    }

    if (structureType === 'sections') {
      // Filter sections
      return (processedItems as SectionWithItems<T>[])
        .map(section => ({
          ...section,
          items: section.items?.filter(
            item =>
              'children' in item
              && typeof item.children === 'string'
              && item.children.toLowerCase().includes(effectiveInputValue.toLowerCase()),
          ),
        }))
        .filter(section => section.items != null && section.items.length > 0)
    }

    if (structureType === 'flatList') {
      // Filter flat list items directly
      return Array.from(processedItems as TDefaultItemComponent<T>[]).filter(
        item =>
          'children' in item
          && typeof item.children === 'string'
          && item.children.toLowerCase().includes(effectiveInputValue.toLowerCase()),
      )
    }

    return processedItems
  }, [needsFiltering, processedItems, effectiveInputValue, structureType])

  return {
    structureType,
    inputValue: effectiveInputValue,
    onInputChange: effectiveOnInputChange,
    items: needsFiltering ? filteredItems : processedItems,
  }
}
