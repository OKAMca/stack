/* eslint-disable react-hooks/rules-of-hooks */
import { Anchor, Button } from '@okam/stack-ui'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentType } from 'react'
import { useState } from 'react'
import { mergeProps } from 'react-aria'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import type { Key, Selection } from 'react-stately'
import { Item, Section } from 'react-stately'
import Box from '../../Box'
import Option from '../Option'
import ListBoxSection from './components/ListBoxSection'
import ListBox, { ReactHookFormListBox } from '.'

const meta: Meta<typeof ListBox> = {
  title: 'Form/Fields/ListBox',
  component: ListBox,
  subcomponents: {
    Item: Option as unknown as ComponentType<unknown>,
    Section: ListBoxSection as unknown as ComponentType<unknown>,
  },
  argTypes: {
    fieldRef: {
      table: {
        category: 'Form',
      },
    },
    errorMessage: {
      description:
        'The error message to display when the field has errors. Only displayed when `isError` is `true` and the `errorMessage` prop is defined.',
      table: {
        category: 'Form',
      },
    },
    items: {
      description: 'The items to render in the listbox. Necessary when using `children` as a rendering function.',
      control: false,
    },
    children: {
      description:
        'The children to render in the listbox. Can be a function that returns a ReactNode (automatically loops through the array of items in the `items` prop was used). Can also be many `Item` or `Section` children that received their props directly.',
      control: false,
    },
    escapeKeyBehavior: {
      table: {
        defaultValue: {
          summary: 'clearSelection',
        },
        type: {
          summary: 'clearSelection | none',
        },
      },
    },
    selectionBehavior: {
      table: {
        defaultValue: {
          summary: 'toggle',
        },
        type: {
          summary: 'toggle | replace',
        },
      },
    },
    selectionMode: {
      description:
        'Only `single` and `multiple` options will make the listbox options selectable. Otherwise, the listbox will be read-only.',
      table: {
        type: {
          summary: 'single | multiple | none',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: {
        type: 'radio',
      },
      options: ['single', 'multiple', 'none'],
    },
    disallowEmptySelection: {
      control: {
        type: 'radio',
      },
      options: [true, false],
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
      description: 'Prevents the component from having no selected keys.',
    },
    linkElementType: {
      control: false,
      table: {
        type: {
          summary: 'ForwardRefExoticComponent<TAnchorProps & TAnchorRefAttributes>',
        },
        defaultValue: {
          summary: 'Anchor',
        },
      },
      description:
        'The element type to use for the link options. Defaults to stack-ui `Anchor` component. Options are rendered as anchors when they get their `href` prop passed',
    },
  },
  args: {
    label: 'Fruits',
    children: [
      <Item key="banana">Banana</Item>,
      <Item key="apple">Apple</Item>,
      <Item key="orange">Orange</Item>,
      <Item key="pear">Pear</Item>,
      <Item key="pineapple">Pineapple</Item>,
      <Item key="watermelon">Watermelon</Item>,
      <Item key="strawberry">Strawberry</Item>,
      <Item key="blueberry">Blueberry</Item>,
      <Item key="raspberry">Raspberry</Item>,
      <Item key="blackberry">Blackberry</Item>,
      <Item key="cherry">Cherry</Item>,
      <Item key="grape">Grape</Item>,
      <Item key="kiwi">Kiwi</Item>,
    ],
  },
}

export default meta

type Story = StoryObj<typeof ListBox>

export const Default: Story = {}

export const Sections: Story = {
  args: {
    children: [
      <Section key="berries" title="Berries">
        <Item key="strawberry">Strawberry</Item>
        <Item key="blueberry">Blueberry</Item>
        <Item key="raspberry">Raspberry</Item>
        <Item key="blackberry">Blackberry</Item>
      </Section>,
      <Section key="fruits" title="Exotic Fruits">
        <Item key="mango">Mango</Item>
        <Item key="papaya">Papaya</Item>
        <Item key="pineapple">Pineapple</Item>
        <Item key="kiwi">Kiwi</Item>
      </Section>,
    ],
  },
}

export const ComplexOptions: Story = {
  args: {
    children: [
      <Item key="banana">
        <span>Banana</span>
        <span>Yellow</span>
      </Item>,
      <Item key="apple">
        <span>Apple</span>
        <span>Red</span>
      </Item>,
      <Item key="orange">
        <span>Orange</span>
        <span>Orange</span>
      </Item>,
      <Item key="pear">Pear</Item>,
      <Item key="pineapple">Pineapple</Item>,
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabledKeys: ['banana', 'apple', 'strawberry', 'blueberry', 'raspberry', 'blackberry', 'cherry', 'grape', 'kiwi'],
  },
}

export const ChildrenRenderingFunction: Story = {
  args: {
    items: [
      { key: 'banana', children: 'Banana' },
      { key: 'apple', children: 'Apple' },
      { key: 'orange', children: 'Orange' },
    ],
    children: (item) => <Item key={item.key}>{item.children}</Item>,
  },
}

export const Selectable: Story = {
  args: {
    selectionMode: 'multiple',
    defaultSelectedKeys: ['banana', 'apple'],
    onSelectionChange: (keys) => {
      console.log(keys)
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const { onSelectionChange, children, items, ...rest } = args
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['banana', 'apple']))
    const handleButtonPress = (key: Key) => {
      setSelectedKeys((newSelectedKeys) => {
        const copy = new Set(newSelectedKeys)
        if (copy.has(key)) {
          copy.delete(key)
        } else {
          copy.add(key)
        }
        return copy
      })
    }
    return (
      <Box>
        <Box customTheme="m-4 flex flex-wrap gap-2">
          {[...(items ?? [])].map((item) => (
            <Button key={item.key} handlePress={() => handleButtonPress(item.key)}>
              {item.children}
            </Button>
          ))}
        </Box>
        <ListBox
          {...rest}
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => {
            onSelectionChange?.(keys)
            setSelectedKeys(keys)
          }}
          items={items}
        >
          {children}
        </ListBox>
      </Box>
    )
  },
  args: {
    items: [
      { key: 'banana', children: 'Banana' },
      { key: 'apple', children: 'Apple' },
      { key: 'orange', children: 'Orange' },
    ],
    children: (item) => <Item key={item.key}>{item.children}</Item>,
    selectionMode: 'multiple',
    defaultSelectedKeys: ['banana', 'apple'],
    onSelectionChange: (keys) => {
      console.log(keys)
    },
  },
}

export const LinkOptions: Story = {
  args: {
    linkElementType: Anchor,
    children: [
      <Item key="banana" href="https://www.google.com">
        Banana
      </Item>,
      <Item key="apple" href="https://www.google.com">
        Apple
      </Item>,
      <Item key="orange" href="https://www.google.com">
        Orange
      </Item>,
    ],
  },
}

type ReactHookFormStory = StoryObj<typeof ReactHookFormListBox>

export const ReactHookForm: ReactHookFormStory = {
  decorators: [
    (Story, context) => {
      const { defaultSelectedKeys } = context.args
      const methods = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
          fruits: defaultSelectedKeys,
        },
      })

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      )
    },
  ],
  render: (args) => {
    const { rules } = args
    const methods = useFormContext()
    const { ref: fieldRef, ...registerProps } = methods.register('fruits', rules)

    const clearAll = () => {
      methods.resetField('fruits')
      methods.clearErrors('fruits')
    }

    const handleSubmit = methods.handleSubmit((data) => {
      console.log('Form submitted:', data)
    })

    return (
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <Box customTheme="flex gap-8">
            <ReactHookFormListBox {...mergeProps(args, registerProps)} fieldRef={fieldRef} />
            <Box customTheme="flex flex-col justify-center gap-2">
              <Button tokens={{ intent: 'danger' }} handlePress={clearAll}>
                Clear All
              </Button>
              <Button handlePress={() => handleSubmit()} {...{ type: 'submit' }}>
                Submit Form
              </Button>
            </Box>
          </Box>
          <Box customTheme="mt-4 p-4 bg-gray-100 rounded">
            <strong>Form Values:</strong>
            <pre>{JSON.stringify(Array.from(methods.watch('fruits')), null, 2)}</pre>
          </Box>
        </form>
      </FormProvider>
    )
  },
  args: {
    rules: {
      required: 'Please select at least one fruit',
      validate: (value: Set<Key>) => {
        if (!value || value.size === 0) {
          return 'Please select at least one fruit'
        }
        if (value.size > 3) {
          return 'You can only select up to 3 fruits'
        }
        return true
      },
    },
    isRequired: true,
    name: 'fruits',
    label: 'Select your three favorite fruits',
    selectionMode: 'multiple',
    defaultSelectedKeys: ['banana', 'apple'],
    disabledKeys: ['banana'],
    children: [
      <Item key="banana">Banana</Item>,
      <Item key="apple">Apple</Item>,
      <Item key="orange">Orange</Item>,
      <Item key="pear">Pear</Item>,
      <Item key="pineapple">Pineapple</Item>,
      <Item key="watermelon">Watermelon</Item>,
      <Item key="strawberry">Strawberry</Item>,
      <Item key="blueberry">Blueberry</Item>,
      <Item key="raspberry">Raspberry</Item>,
      <Item key="blackberry">Blackberry</Item>,
      <Item key="cherry">Cherry</Item>,
      <Item key="grape">Grape</Item>,
      <Item key="kiwi">Kiwi</Item>,
    ],
  },
}
