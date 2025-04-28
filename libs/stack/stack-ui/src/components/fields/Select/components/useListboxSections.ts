/* eslint-disable no-restricted-syntax */
import type { Item, Section } from './Listbox.interface'

/**
 * Custom hook that builds a tree structure where each header is a section,
 * and each following option is a child of the section.
 * If no headers are found, all items are placed in a section without a header.
 */
export function useListboxSections(collection: Item[]) {
  const sections: Section[] = []
  let currentSection: Section | null = null
  const orphanedItems: Item[] = []

  // Process each item in the collection
  for (const item of collection) {
    // Check if the item is a header by looking for 'header' or 'header-' prefix
    const isHeader = item.key === 'header' || item.key?.toString().startsWith('header-')

    if (isHeader) {
      // When we find a header, complete previous section if it exists
      if (currentSection) {
        sections.push(currentSection)
      }
      // Start a new section with this header
      currentSection = { header: item, items: [] }
    } else if (currentSection) {
      // Add to current section
      currentSection.items.push(item)
    } else {
      // No current section, add to orphaned items
      orphanedItems.push(item)
    }
  }

  // Add the final section if it exists
  if (currentSection) {
    sections.push(currentSection)
  }

  // Create the final array, placing orphaned items at the beginning to preserve original order
  const allSections = [...(orphanedItems.length > 0 ? [{ items: orphanedItems }] : []), ...sections]

  return allSections
}
