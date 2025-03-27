import { Item } from 'react-stately'
import TagGroup from '.'

const Template = (args) => <TagGroup {...args} />

export default {
  title: 'BASE COMPONENTS/Tag Group',
  component: TagGroup,
  args: {
    label: 'Colors',
    description: 'Select the colors you want to add',
    children: [<Item key="red">Red</Item>, <Item key="blue">Blue</Item>, <Item key="green">Green</Item>],
  },
}

export const Default = Template.bind({})

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',
  args: {
    disabledKeys: ['red'],
  },
}

export const Error = {
  render: Template.bind({}),
  name: 'Error',
  args: {
    errorMessage: 'Please select at least one color',
  },
}
