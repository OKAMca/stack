import { Filter } from '@okam/next-component'
import { Item } from 'react-stately'

const ColorFilter = () => {
  return (
    <div>
      <Filter id="color" label="Color">
        <Item key="red">Red</Item>
        <Item key="blue">Blue</Item>
        <Item key="green">Green</Item>
      </Filter>
    </div>
  )
}

export default ColorFilter
