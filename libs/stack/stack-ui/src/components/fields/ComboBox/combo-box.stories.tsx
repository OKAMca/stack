import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentType } from 'react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Item, Section } from 'react-stately'
import Box from '../../Box'
import Button from '../../Button'
import { Node } from '../../Node'
import Popover from '../../Popover'
import ListBox from '../ListBox'
import { useComboBoxFiltering } from './hooks/useComboBoxFiltering'
import ComboBox, { ReactHookFormComboBox } from '.'

const meta: Meta<typeof ComboBox> = {
  title: 'Form/Fields/ComboBox',
  component: ComboBox,
  subcomponents: {
    ListBox: ListBox as ComponentType<unknown>,
    Node: Node as ComponentType<unknown>,
    Popover: Popover as ComponentType<unknown>,
  },
  args: {
    id: 'brand',
    name: 'brand',
    label: 'Brand',
    placeholder: 'Select a brand',
    allowsCustomValue: true,
    menuTrigger: 'focus',
    children: [
      <Item key="1">CTV</Item>,
      <Item key="2">TSN</Item>,
      <Item key="3">Crave</Item>,
      <Item key="4">CTV Comedy</Item>,
      <Item key="5">CTV Sci-fi</Item>,
      <Item key="6">CTV Drama</Item>,
      <Item key="7">CTV News</Item>,
      <Item key="8">CTV Sports</Item>,
      <Item key="9">CTV Kids</Item>,
      <Item key="10">Bell Media</Item>,
      <Item key="11">Bell</Item>,
      <Item key="12">Bell Sports</Item>,
      <Item key="13">Bell Kids</Item>,
      <Item key="14">Bell Drama</Item>,
      <Item key="15">Bell News</Item>,
      <Item key="16">Bell Sports</Item>,
      <Item key="17">Bell Kids</Item>,
      <Item key="18">Bell Drama</Item>,
    ],
  },
  argTypes: {
    popoverRef: {
      description: 'Optional popover ref for controlled usage',
    },
    listBoxRef: {
      description: 'Optional list box ref for controlled usage',
    },
    inputRef: {
      description: 'Optional input ref for controlled usage',
    },
    buttonRef: {
      description: 'Optional button ref for controlled usage',
    },
    hookFormRef: {
      description: 'Ref to the input element for usage with React Hook Form',
    },
    icon: {
      description: 'Icon to display in the input',
      table: {
        type: {
          summary: 'string | ReactNode',
        },
        defaultValue: {
          summary: 'ArrowDown',
        },
      },
    },
    closeIcon: {
      description: 'Icon to display in the input when the value is cleared',
      table: {
        type: {
          summary: 'string | ReactNode',
        },
        defaultValue: {
          summary: 'CloseBtn',
        },
      },
    },
    errorMessage: {
      description: 'Error message to display when the input is invalid',
      table: {
        type: {
          summary: 'string | ReactNode',
        },
      },
    },
    defaultFilter: {
      description: 'Function to filter the items',
      table: {
        type: {
          summary: '(value: string, substring: string) => boolean',
        },
        defaultValue: {
          summary: '(value: string, substring: string) => value.includes(substring)',
        },
      },
    },
    allowsCustomValue: {
      description: 'Whether the input allows custom values that are not in the list',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    children: {
      description:
        'Nodes to display in the list. It can either be a collection of `Item` or `Section` components or a rendering function for the `items` prop.',
      table: {
        type: {
          summary: 'ReactElement<ItemProps>[] | ReactElement<SectionProps>[] | ((item: TItem) => ReactNode)',
        },
      },
    },
    items: {
      description:
        'Items to display in the list. If using this prop, the `children` prop is required to be a rendering function.',
      table: {
        type: {
          summary: 'Array<ItemProps | SectionProps<ItemProps>>',
        },
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof ComboBox>

export const Default: Story = {
  name: 'Default',
  args: {
    name: 'brand-default',
  },
}

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    name: 'brand-disabled',
    isDisabled: true,
    icon: 'ArrowDown',
  },
}

export const WithError: Story = {
  name: 'With Error',
  args: {
    isInvalid: true,
    name: 'brand-error',
    errorMessage: 'This is an error message',
  },
}

export const WithSections: Story = {
  name: 'With Sections',
  args: {
    name: 'brand-with-sections',
    children: [
      <Section key="section-1" title="CTV">
        <Item key="item-1">CTV</Item>
        <Item key="item-2">TSN</Item>
        <Item key="item-3">Crave</Item>
        <Item key="item-4">CTV Comedy</Item>
        <Item key="item-5">CTV Sci-fi</Item>
      </Section>,
      <Section key="section-2" title="Bell">
        <Item key="item-6">Bell</Item>
        <Item key="item-7">Bell Sports</Item>
        <Item key="item-8">Bell Kids</Item>
        <Item key="item-9">Bell Drama</Item>
      </Section>,
    ],
  },
}

export const AllowsCustomValue: Story = {
  name: 'Allows Custom Value',
  args: {
    name: 'brand-custom',
    allowsCustomValue: true,
  },
}

export const ManualTrigger: Story = {
  args: {
    name: 'brand-focus',
    menuTrigger: 'manual',
  },
}

export const ChildrenRenderingFunction: Story = {
  name: 'Children Rendering Function',
  args: {
    name: 'brand-children-rendering-function',
  },
  render(args) {
    const metaChildren = meta.args?.children as React.ReactElement[]
    const items =
      metaChildren?.map((child) => ({
        key: child.key as string,
        children: child.props.children,
      })) || []

    // Apply filtering hook for search functionality
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { inputValue, onInputChange, items: filteredItems } = useComboBoxFiltering(items)

    return (
      <ComboBox
        {...args}
        name="brand-children-rendering-function"
        inputValue={inputValue}
        onInputChange={onInputChange}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items={filteredItems as any}
      >
        {({ key, children, ...item }) => (
          <Node key={key} {...item}>
            {children}
          </Node>
        )}
      </ComboBox>
    )
  },
}

export const ChildrenRenderingFunctionWithSections: Story = {
  name: 'Children Rendering Function With Sections',
  args: {
    name: 'brand-children-rendering-function-with-sections',
  },
  render(args) {
    const sections = [
      {
        key: 'section-1',
        title: 'CTV',
        items: [
          { key: '1', children: 'CTV' },
          { key: '2', children: 'TSN' },
          { key: '3', children: 'Crave' },
          { key: '4', children: 'CTV Comedy' },
          { key: '5', children: 'CTV Sci-fi' },
          { key: '6', children: 'CTV Drama' },
        ],
      },
      {
        key: 'section-2',
        title: 'Bell',
        items: [
          { key: '7', children: 'Bell' },
          { key: '8', children: 'Bell Sports' },
          { key: '9', children: 'Bell Kids' },
        ],
      },
    ]

    // Apply filtering hook
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { inputValue, onInputChange, items } = useComboBoxFiltering(sections)

    return (
      <ComboBox
        {...args}
        name="brand-children-rendering-function-with-sections"
        inputValue={inputValue}
        onInputChange={onInputChange}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items={items as any}
      >
        {({ key, children, ...item }) => (
          <Node key={key} {...item}>
            {children}
          </Node>
        )}
      </ComboBox>
    )
  },
}

export const ReactHookForm: Story = {
  name: 'React Hook Form',
  args: {
    name: 'brand-react-hook-form',
  },
  render() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm<{ brand: string }>()
    const children = meta.args?.children as React.ReactElement[]

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(() => null)}>
          <Box customTheme="flex flex-col gap-4">
            <ReactHookFormComboBox
              label="Brand"
              name="brand-react-hook-form"
              placeholder="Select a brand"
              isRequired
              rules={{
                required: 'Please select a brand',
              }}
            >
              {children}
            </ReactHookFormComboBox>
            <Button {...({ type: 'submit' } as React.ButtonHTMLAttributes<HTMLButtonElement>)}>Submit</Button>
          </Box>
        </form>
      </FormProvider>
    )
  },
}
