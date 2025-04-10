'use client'

import { Filter } from '@okam/next-component'
import { Button } from '@okam/stack-ui'
import { useState } from 'react'
import type { Key } from 'react-stately'
import { Item } from 'react-stately'

const shapesData = ['circle', 'square', 'triangle']

const ControlledShapeFilter = () => {
  const [shapes, setShapes] = useState<Key[]>([])

  function toggleShape(shape: Key) {
    if (shapes.includes(shape)) {
      setShapes(shapes.filter((s) => s !== shape))
    } else {
      setShapes([...shapes, shape])
    }
  }

  return (
    <div>
      {shapesData.map((shape) => (
        <Button
          key={shape}
          handlePress={() => {
            toggleShape(shape)
          }}
        >
          {shape}
        </Button>
      ))}
      <Filter
        id="shape"
        label="Shape"
        selectedKeys={shapes}
        onSelectionChange={(keys) => {
          const keysArray = Array.from(keys)
          setShapes(keysArray)
        }}
      >
        {shapesData.map((shape) => (
          <Item key={shape}>{shape}</Item>
        ))}
      </Filter>
    </div>
  )
}

export default ControlledShapeFilter
