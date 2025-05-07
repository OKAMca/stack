import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentType } from 'react'
import { useState } from 'react'
import type { Key } from 'react-aria'
import Box from '../Box'
import Button, { Anchor } from '../Button'
import Typography from '../Typography'
import Tab from './components/Tab'
import { TabItem } from './components/TabItem'
import TabPanel from './components/TabPanel'
import TabList from '.'

const meta: Meta<typeof TabList> = {
  title: 'Base Components/TabList',
  component: TabList,
  subcomponents: {
    Tab: Tab as ComponentType<unknown>,
    TabPanel: TabPanel as ComponentType<unknown>,
  },
  argTypes: {
    label: {
      description: 'Label of the tab list. Gets rendered before the tabs.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tab list.',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    panelTransition: {
      description: 'Component used for transitioning between tab panels. Defaults to RenderWithOpacity.',
      table: {
        type: { summary: 'ComponentType<TTransition>' },
      },
      control: false,
    },
    items: {
      description: 'Items to be rendered in the tab list. Can be used with children render function.',
      table: {
        type: { summary: 'TTabItemProps[]' },
      },
    },
    children: {
      description:
        'Children containing items data, or a rendering function. You can either use the `items` prop with the `children` rendering function or pass the data in `children` directly.',
      table: {
        type: {
          summary:
            'ReactElement<TTabItemProps> | ReactElement<TTabItemProps>[] | ((item: TTabItemProps) => ReactElement<TTabItemProps>)',
        },
      },
      control: false,
    },
    selectedKey: {
      description: 'The key of the selected tab. Use for controlled selection along with `onSelectionChange`.',
      table: {
        type: { summary: 'Key' },
      },
    },
    defaultSelectedKey: {
      description: 'Tab that is selected by default.',
      table: {
        type: { summary: 'Key' },
      },
    },
    disabledKeys: {
      description: 'Tabs that are disabled. Can be styled using the `isDisabled` token.',
      table: {
        type: { summary: 'Set<Key>' },
      },
    },
    onSelectionChange: {
      description: 'Callback when a tab is selected.',
      table: {
        type: { summary: '(key: Key) => void' },
      },
      control: false,
    },
  },
  args: {
    label: 'Available Programs',
    children: [
      <TabItem key="1">Basketball</TabItem>,
      <TabItem key="2">Technology</TabItem>,
      <TabItem key="3">Science</TabItem>,
      <TabItem key="4">Math</TabItem>,
      <TabItem key="5">English</TabItem>,
    ],
  },
}

export default meta

type Story = StoryObj<typeof TabList>

export const Default: Story = {}

export const FocusableContent: Story = {
  args: {
    children: [
      <TabItem key="1" title="Basketball">
        <Box customTheme="flex flex-col gap-2">
          <Typography>Go to the basketball website</Typography>
          <Anchor href="https://www.basketball.com">Basketball</Anchor>
        </Box>
      </TabItem>,
      <TabItem key="2" title="Technology">
        Technology
      </TabItem>,
      <TabItem key="3" title="Science">
        Science
      </TabItem>,
      <TabItem key="4" title="Math">
        Math
      </TabItem>,
      <TabItem key="5" title="English">
        English
      </TabItem>,
    ],
  },
}

export const VerticalOrientation: Story = {
  args: {
    orientation: 'vertical',
  },
}

export const DisabledKeys: Story = {
  args: {
    disabledKeys: ['2', '3'],
  },
}

export const ChildrenRenderFunction: Story = {
  args: {
    items: [
      {
        key: '1',
        children: 'Basketball',
      },
      {
        key: '2',
        children: 'Technology',
      },
      {
        key: '3',
        children: 'Science',
      },
      {
        key: '4',
        children: 'Math',
      },
      {
        key: '5',
        children: 'English',
      },
    ],
    children: (item) => <TabItem key={item.key}>{item.children}</TabItem>,
  },
}

export const Controlled: Story = {
  render: (args) => {
    const { defaultSelectedKey, items, ...rest } = args
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedKey, setSelectedKey] = useState<Key | undefined>(defaultSelectedKey)
    return (
      <Box customTheme="flex flex-col gap-4">
        <Box customTheme="flex gap-2">
          {Array.from(items ?? []).map((item) => (
            <Button key={`button-${item.key}`} handlePress={() => setSelectedKey(item.key)}>
              {item.children}
            </Button>
          ))}
        </Box>
        <TabList {...rest} selectedKey={selectedKey} onSelectionChange={setSelectedKey} />
      </Box>
    )
  },
  args: {
    defaultSelectedKey: '1',
    items: [
      {
        key: '1',
        children: 'Basketball',
      },
      {
        key: '2',
        children: 'Technology',
      },
      {
        key: '3',
        children: 'Science',
      },
      {
        key: '4',
        children: 'Math',
      },
      {
        key: '5',
        children: 'English',
      },
    ],
  },
}
