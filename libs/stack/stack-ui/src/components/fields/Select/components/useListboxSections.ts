import type { Item, Section } from './Listbox.interface'

/**
 * Custom hook that builds a tree structure where each header is a section,
 * and each following option is a child of the section.
 * If no headers are found, all items are placed in a section without a header.
 */
export function useListboxSections(collection: Item[]) {
  // Process the collection
  const { sections, currentSection, orphanedItems } = collection.reduce(
    (acc, item) => {
      // Check if the item is a header by looking for 'header' or 'header-' prefix
      const isHeader = item.key === 'header' || item.key?.toString().startsWith('header-')

      // When we find a header, start a new section
      if (isHeader) {
        // Complete the previous section if it exists
        if (acc.currentSection) {
          acc.sections.push(acc.currentSection)
        }

        // Return with a new current section
        return {
          sections: acc.sections,
          currentSection: { header: item, items: [] },
          orphanedItems: acc.orphanedItems,
        }
      }

      // For non-header items
      if (acc.currentSection) {
        // Add to current section - use push instead of spread
        acc.currentSection.items.push(item)
        return acc
      }

      // No current section, add to orphaned items - use push instead of spread
      acc.orphanedItems.push(item)
      return acc
    },
    {
      sections: [] as Section[],
      currentSection: null as Section | null,
      orphanedItems: [] as Item[],
    },
  )

  // Combine all sections
  const allSections = [...sections]
  if (currentSection) {
    allSections.push(currentSection)
  }

  // If we have orphaned items, add them as a section
  if (orphanedItems.length > 0) {
    allSections.push({
      items: orphanedItems,
    })
  }

  return allSections
}
