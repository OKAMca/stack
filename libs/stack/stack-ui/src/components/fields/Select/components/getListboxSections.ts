import type { Item, Section } from './Listbox.interface'

/**
 * Utility function that builds a tree structure where each header is a section,
 * and each following option is a child of the section.
 * If no headers are found, all items are placed in a section without a header.
 */
export function getListboxSections<T extends object = object>(
  collection: Item<T>[],
  optionsWithHeaders: { key: string, value: string }[],
) {
  const sections: Section<T>[] = []
  let currentSection: Section<T> | null = null
  const orphanedItems: Item<T>[] = []

  // Process each item in the collection
  for (const item of optionsWithHeaders) {
    // Check if the item is a header by looking for 'header' or 'header-' prefix
    const isHeader = item.key === 'header' || item.key?.toString().includes('header-')
    const itemInCollection = collection.find((entry) => {
      if (typeof entry.rendered !== 'string')
        return false

      return entry.rendered === item.value
    })

    if (isHeader) {
      // When we find a header, complete previous section if it exists
      if (currentSection != null) {
        sections.push(currentSection)
      }
      // Start a new section with this header
      currentSection = { header: { key: item.key, rendered: item.value }, items: [] }
    }
    else if (currentSection != null) {
      // Add to current section
      if (itemInCollection != null) {
        currentSection.items.push(itemInCollection)
      }
    }
    else if (itemInCollection != null) {
      // No current section, add to orphaned items
      orphanedItems.push(itemInCollection)
    }
  }

  // Add the final section if it exists
  if (currentSection != null) {
    sections.push(currentSection)
  }

  // Create the final array, placing orphaned items at the beginning to preserve original order
  const allSections = [...(orphanedItems.length > 0 ? [{ items: orphanedItems }] : []), ...sections]

  return allSections
}
