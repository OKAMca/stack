import { Box, Typography } from '@okam/stack-ui'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import type { Key } from 'react-stately'
import { Item } from 'react-stately'
import type { TFilterProps } from './interface'
import Filter from '.'

const Template = (args: TFilterProps) => {
  const { id } = args
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([])

  return (
    <Box>
      <Typography tokens={{ size: 'h3' }}>Search params:</Typography>
      <Typography as="pre" tokens={{ size: 'h5' }}>
        ?{id}={selectedKeys.join(',')}
      </Typography>
      <Filter {...args} selectedKeys={selectedKeys} onSelectionChange={(keys) => setSelectedKeys(Array.from(keys))} />
    </Box>
  )
}

const meta: Meta<typeof Filter> = {
  title: 'Fields/Filter',
  component: Filter,
  args: {
    id: 'fruits',
    label: 'Fruits',
    children: [<Item key="orange">Orange</Item>, <Item key="apple">Apple</Item>, <Item key="banana">Banana</Item>],
    onSelectionChange: (keys) => {
      console.log(`Selected keys: ${keys}`)
    },
  },
  argTypes: {
    onSelectionChange: {
      description:
        'Callback function that is called when the selection changes. Use `Array.from(keys)` to get the selected keys as an array. Also used for controlled keys where you can pass a `setSelectedKKeys` function.',
      table: {
        type: {
          summary: '(keys: Set<Key>) => void',
        },
      },
    },
    items: {
      description:
        'Omitting this prop will result in the `children` prop being used as data. Otherwise, this prop is used for data and `children` servers to iterate it.',
      table: {
        type: {
          summary: ' Iterable<TFilterItem>',
        },
      },
    },
    children: {
      description:
        'Can either be used as an array of `Item` components to pass data directly or as a function to iterate over the `items` prop',
      control: false,
      table: {
        type: {
          summary: 'CollectionChildren<TFilterItem>',
        },
      },
    },
    label: {
      description: 'Text displayed on the button opening the filter popover',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
  },
}

export default meta

export const Default = {
  render: Template.bind({}),
  name: 'Default',
}
