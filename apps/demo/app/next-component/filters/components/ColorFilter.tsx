'use client'

import { Filter } from '@okam/next-component'
import { Item } from 'react-stately'

const ColorFilter = () => {
  return (
    <div>
      <Filter
        id="color"
        label="Color"
        items={[
          { key: 'red', children: 'Red' },
          { key: 'blue', children: 'Blue' },
          { key: 'green', children: 'Green' },
        ]}
      >
        {({ key, children }) => <Item key={key}>{children}</Item>}
      </Filter>
    </div>
  )
}

export default ColorFilter
