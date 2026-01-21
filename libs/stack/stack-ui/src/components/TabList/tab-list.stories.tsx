import type { Meta, StoryObj } from '@storybook/react-webpack5'
import type { ComponentProps, ComponentType } from 'react'
import type { Key } from 'react-aria'
import { useState } from 'react'
import TabList from '.'
import { Box } from '../Box'
import { Anchor, Button } from '../Button'
import { Typography } from '../Typography'
import Tab from './components/Tab'
import { TabItem } from './components/TabItem'
import TabPanel from './components/TabPanel'

type TabListArgs = ComponentProps<typeof TabList>

const meta: Meta<typeof TabList> = {
  title: 'Base Components/TabList',
  component: TabList,
  subcomponents: {
    Tab: Tab as ComponentType<unknown>,
    TabPanel: TabPanel as ComponentType<unknown>,
  },
  argTypes: {
    keyboardActivation: {
      control: 'select',
      options: ['automatic', 'manual'],
      description:
        'Automatic means that tab will activate when navigated to with the arrow keys, manual means that tab will activate on focus.',
      table: {
        defaultValue: { summary: 'automatic' },
        type: { summary: 'automatic | manual' },
      },
    },
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
        Technology content
      </TabItem>,
      <TabItem key="3" title="Science">
        Science content
      </TabItem>,
      <TabItem key="4" title="Math">
        Math content
      </TabItem>,
      <TabItem key="5" title="English">
        English content
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
    children: item => <TabItem key={item.key}>{item.children}</TabItem>,
  },
}

export const Controlled: Story = {
  render: (args: TabListArgs) => {
    const { defaultSelectedKey, items, ...rest } = args
    const [selectedKey, setSelectedKey] = useState<Key | undefined>(defaultSelectedKey)
    return (
      <Box customTheme="flex flex-col gap-4">
        <Box customTheme="flex gap-2">
          {Array.from(items ?? []).map((item: { key?: Key, children?: React.ReactNode }) => (
            <Button key={`button-${item.key}`} handlePress={() => setSelectedKey(item.key)}>
              {item.children}
            </Button>
          ))}
        </Box>
        <TabList
          {...rest}
          defaultSelectedKey={defaultSelectedKey}
          items={items}
          selectedKey={selectedKey}
          onSelectionChange={setSelectedKey}
        />
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
