'use client'

import { Filter } from '@okam/next-component'
import { Button } from '@okam/stack-ui'
import { Item } from 'react-stately'
import { useSet } from 'react-use'

const ControlledShapeFilter = () => {
  const shapesData = ['circle', 'square', 'triangle']
  const [shapes, shapesActions] = useSet<string>(new Set())

  return (
    <div>
      {shapesData.map((shape) => (
        <Button key={shape} handlePress={() => shapesActions.toggle(shape)}>
          {shape}
        </Button>
      ))}
      <Filter id="shape" label="Shape" selectedKeys={shapes}>
        <Item key="circle">Circle</Item>
        <Item key="square">Square</Item>
        <Item key="triangle">Triangle</Item>
      </Filter>
    </div>
  )
}

export default ControlledShapeFilter
