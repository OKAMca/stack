import React, { useMemo, useState } from 'react'
import { Node } from '../../../Node'

interface SectionWithItems {
  key: string
  title?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: (props: any) => React.ReactElement
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: Array<{ key: string; children: string; [key: string]: any }>
}

interface SimpleSectionData {
  key: string
  title?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Array<{ key: string; children: string; [key: string]: any }>
}

// Flat list item type
interface FlatListItem {
  key: string
  children: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

/**
 * Transforms simple section data into complex structures with render functions
 */
export function transformSectionsWithRenderFunctions(sections: SimpleSectionData[]): SectionWithItems[] {
  return sections.map((section) => ({
    ...section,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: ({ key, children, ...item }: any) => React.createElement(Node, { key, ...item }, children),
  }))
}

/**
 * Hook for handling automatic filtering of ComboBox structures
 * Supports both flat lists and sections with rendering functions
 */
export function useComboBoxFiltering<T extends SectionWithItems | FlatListItem>(
  items: T[] | undefined,
  controlledInputValue?: string,
  controlledOnInputChange?: (value: string) => void,
) {
  const [internalInputValue, setInternalInputValue] = useState('')

  // Detect the type of structure we're dealing with
  const structureType = useMemo(() => {
    if (!items || items.length === 0) return 'none'

    const itemsArray = Array.from(items)

    // Check if this is sections (items have 'items' array and 'children' function)
    const hasSections = itemsArray.some(
      (item) => item.items && Array.isArray(item.items) && typeof item.children === 'function',
    )

    if (hasSections) return 'sections'

    // Check if this is flat list (items have 'children' property but no 'items' array)
    const isFlatList = itemsArray.some((item) => typeof item.children === 'string' && !item.items)

    if (isFlatList) return 'flatList'

    return 'none'
  }, [items])

  // Use controlled inputValue if provided, otherwise use internal state for structures that need filtering
  const needsFiltering = structureType !== 'none'
  const effectiveInputValue = controlledInputValue ?? (needsFiltering ? internalInputValue : undefined)
  const effectiveOnInputChange = controlledOnInputChange ?? (needsFiltering ? setInternalInputValue : undefined)

  // Filter items based on structure type
  const filteredItems = useMemo(() => {
    if (!needsFiltering || !items || !effectiveInputValue) {
      return items
    }

    if (structureType === 'sections') {
      // Filter sections (existing logic)
      return (items as SectionWithItems[])
        .map((section) => ({
          ...section,
          items: section.items?.filter(
            (item) =>
              typeof item.children === 'string' &&
              item.children.toLowerCase().includes(effectiveInputValue.toLowerCase()),
          ),
        }))
        .filter((section) => section.items && section.items.length > 0)
    }

    if (structureType === 'flatList') {
      // Filter flat list items directly
      return (items as FlatListItem[]).filter(
        (item) =>
          typeof item.children === 'string' && item.children.toLowerCase().includes(effectiveInputValue.toLowerCase()),
      )
    }

    return items
  }, [needsFiltering, items, effectiveInputValue, structureType])

  return {
    structureType,
    inputValue: effectiveInputValue,
    onInputChange: effectiveOnInputChange,
    items: needsFiltering ? filteredItems : items,
  }
}
