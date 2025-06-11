import type { Item, Section } from './Listbox.interface'

export const useListboxSections = (
  collection: Item[],
  optionsWithHeaders: { key: string; value: string }[],
): Section[] => {
  const sections: Section[] = []
  let currentSection: Section = { items: [] }

  collection.forEach((item) => {
    const headerOption = optionsWithHeaders.find((opt) => opt.key === item.key && opt.key.includes('header-'))

    if (headerOption) {
      // If we have items in the current section, add it to sections
      if (currentSection.items.length > 0) {
        sections.push(currentSection)
      }
      // Start a new section with this header
      currentSection = {
        header: item,
        items: [],
      }
    } else {
      // Add this item to the current section
      currentSection.items.push(item)
    }
  })

  // Add the last section if it has items
  if (currentSection.items.length > 0) {
    sections.push(currentSection)
  }

  // If we only have one section and it doesn't have a header,
  // return it as-is (this handles the case where there are no headers)
  if (sections.length === 1 && !sections[0].header) {
    return sections
  }

  // Handle orphaned items (items that come before any header)
  const firstSection = sections[0]
  if (firstSection && !firstSection.header && firstSection.items.length > 0) {
    // Keep orphaned items as their own section without a header
    return sections
  }

  return sections
}
