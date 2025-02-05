'use client'

import { Select } from '@okam/stack-ui'
import { Item } from 'react-stately'

export default function SelectSeason() {
  return (
    <>
      <Select
        id="season-children"
        name="season-children"
        placeholder="Season"
        label="Select a season (passing children items)"
      >
        <Item key="1">Summer</Item>
        <Item key="2">Fall</Item>
        <Item key="3">Winter</Item>
        <Item key="4">Spring</Item>
      </Select>
      <Select
        id="season-children"
        name="season-children"
        placeholder="Season"
        label="Select a season (children rendering function)"
        items={[
          { key: 'summer', children: 'Summer' },
          { key: 'fall', children: 'Fall' },
          { key: 'winter', children: 'Winter' },
          { key: 'spring', children: 'Spring' },
        ]}
      >
        {({ key, ...item }) => <Item key={key} {...item} />}
      </Select>
    </>
  )
}
