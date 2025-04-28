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
        const updatedSections = acc.currentSection ? [...acc.sections, acc.currentSection] : acc.sections

        // Return with a new current section
        return {
          sections: updatedSections,
          currentSection: { header: item, items: [] },
          orphanedItems: acc.orphanedItems,
        }
      }

      // For non-header items
      if (acc.currentSection) {
        // Add to current section
        return {
          ...acc,
          currentSection: {
            ...acc.currentSection,
            items: [...acc.currentSection.items, item],
          },
        }
      }

      // No current section, add to orphaned items
      return {
        ...acc,
        orphanedItems: [...acc.orphanedItems, item],
      }
    },
    {
      sections: [] as Section[],
      currentSection: null as Section | null,
      orphanedItems: [] as Item[],
    },
  )

  // Combine all sections
  const allSections = currentSection ? [...sections, currentSection] : sections

  // If we have orphaned items, create a new array with the orphaned items section added
  // instead of mutating allSections
  if (orphanedItems.length > 0) {
    return [
      ...allSections,
      {
        items: orphanedItems,
      },
    ]
  }

  return allSections
}
