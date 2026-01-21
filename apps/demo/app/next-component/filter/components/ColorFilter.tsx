'use client'

import { Filter } from '@okam/next-component'
import { Item } from 'react-stately'

function FruitFilter() {
  return (
    <Filter
      id="fruits"
      label="Fruits"
      items={[
        { key: 'apple', children: 'Apple' },
        { key: 'banana', children: 'Banana' },
        { key: 'orange', children: 'Orange' },
      ]}
    >
      {({ key, ...item }) => <Item key={key} {...item} />}
    </Filter>
  )
}

export default FruitFilter
