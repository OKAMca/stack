import { useState } from 'react'
import { Item } from 'react-stately'
import Button from '../../Button'
import Select from '.'

const Template = (args) => {
  const { onSelectionChange, ...rest } = args
  const [value, setValue] = useState()
  return (
    <>
      <div className="flex gap-2">
        <Button handlePress={() => setValue('1')}>Winter</Button>
        <Button handlePress={() => setValue('2')}>Spring</Button>
        <Button handlePress={() => setValue('3')}>Summer</Button>
        <Button handlePress={() => setValue('4')}>Autumn</Button>
      </div>
      <Select
        onSelectionChange={(key) => {
          onSelectionChange?.(key)
          setValue(key.toString())
        }}
        selectedKey={value}
        {...rest}
      />
    </>
  )
}

export default {
  title: 'Form/Fields/Select',
  component: Select,

  args: {
    label: 'Season',
    placeholder: 'Select a season',
    onOpenChange: (isOpen) => console.log(`Open changed to ${isOpen}`),
    onSelectionChange: (selectedKey) => console.log(`Selection changed to ${selectedKey}`),
    items: [
      { key: '1', children: 'Winter' },
      { key: '2', children: 'Spring' },
      { key: '3', children: 'Summer' },
      { key: '4', children: 'Autumn' },
    ],
  },
  argTypes: {
    themeName: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'select' },
      },
    },
    tokens: {
      description: '`isInvalid`, `isDisabled`, `isRequired` and `isOpen` get passed to all sub components.',
      table: {
        type: { summary: 'TToken' },
      },
    },
    items: {
      description:
        'The items to display in the select. If passing items, the `children` prop can be used as a callback function iterating over each item in the array.',
      table: {
        type: { summary: 'TSelectItemProps[]' },
      },
    },
    children: {
      description:
        'The children to display in the select. If passing items, the `children` prop can be used as a callback function iterating over each item in the array. Otherwise, multiple `<Item>` components can be passed as children directly.',
      table: {
        type: { summary: 'CollectionChildren<TSelectItemProps>' },
        defaultValue: { summary: '(props) => <Item {...props} />' },
      },
    },
    onOpenChange: {
      table: {
        type: { summary: '(isOpen: boolean) => void' },
      },
    },
    onSelectionChange: {
      table: {
        type: { summary: '(selectedKey: string | number) => void' },
      },
    },
    selectedKey: {
      description: 'The key of the selected item. For controlled usage.',
      table: {
        type: { summary: 'string | number' },
      },
    },
    defaultSelectedKey: {
      table: {
        type: { summary: 'string | number' },
      },
    },
    isOpen: {
      description: 'Whether the popover is open. For controlled usage.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultOpen: {
      table: {
        type: { summary: 'boolean' },
      },
    },
    icon: {
      table: {
        type: { summary: 'string | React.ReactNode' },
      },
    },
    isInvalid: {
      table: {
        type: { summary: 'boolean' },
      },
    },
    isDisabled: {
      table: {
        type: { summary: 'boolean' },
      },
    },
    isRequired: {
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',
  args: {
    id: 'season-default',
    name: 'season-default',
  },
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    id: 'season-disabled',
    name: 'season-disabled',
    isDisabled: true,
    icon: 'ChevronLeft',
  },
}

export const Error = {
  render: Template.bind({}),
  name: 'Error',

  args: {
    id: 'season-error',
    name: 'season-error',
    isInvalid: true,
    errorMessage: 'This is an error message',
  },
}

export const ChildrenItems = {
  render: Template.bind({}),
  name: 'Children Items',
  args: {
    id: 'season-children',
    name: 'season-children',
    items: undefined,
    children: (
      <>
        <Item key="1">Winter</Item>
        <Item key="2">Spring</Item>
        <Item key="3">Summer</Item>
        <Item key="4">Autumn</Item>
      </>
    ),
  },
}

export const CustomChildrenRenderFunction = {
  render: Template.bind({}),
  name: 'Custom Children Render Function',
  args: {
    id: 'season-custom-children',
    name: 'season-custom-children',
    children: (itemProps) => <Item {...itemProps} key={itemProps.key} />,
  },
}

export const PopoverMatchesWidth = {
  render: Template.bind({}),
  name: 'Popover Matches Width',
  args: {
    id: 'season-popover-matches-width',
    name: 'season-popover-matches-width',
    tokens: {
      width: 'matches',
    },
  },
}
