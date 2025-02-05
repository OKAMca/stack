'use client'

import { Select, SelectItem } from '@okam/stack-ui'

export default function SelectSeason() {
  return (
    <Select
      id="season-children"
      name="season-children"
      placeholder="Season"
      label="Select a season (children rendering function)"
      items={[
        { itemKey: 'summer', children: 'Summer' },
        { itemKey: 'fall', children: 'Fall' },
        { itemKey: 'winter', children: 'Winter' },
        { itemKey: 'spring', children: 'Spring' },
      ]}
    >
      {(itemProps) => <SelectItem key={itemProps.itemKey} {...itemProps} />}
    </Select>
  )
}
