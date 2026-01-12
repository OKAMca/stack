import { useMemo, useState } from 'react'
import { useListData } from 'react-stately'
import Box from '../Box'
import Typography from '../Typography'
import Tag from './components/Tag'
import { TagItem } from './components/TagItem'
import TagGroup from '.'
/**
 * @typedef {import('@storybook/react').Meta<typeof TagGroup>} Meta
 * @typedef {import('@storybook/react').StoryObj<Meta>} Story
 */

const TemplateRemovable = (args) => {
  const { items, ...rest } = args
  const list = useListData({ initialItems: items })
  return <TagGroup {...rest} items={list.items} onRemove={(keys) => list.remove(...keys)} />
}

/**
 *
 * @param {import('./interface').TTagGroupProps} args
 * @returns
 */
function TemplateMaximalProps(args) {
  const { items, defaultSelectedKeys, ...rest } = args
  const list = useListData({ initialItems: items, initialSelectedKeys: defaultSelectedKeys })
  const selectedKeysRender = useMemo(() => {
    return Array.from(list.selectedKeys?.keys?.() ?? []).map((key) => (
      <Box customTheme="rounded-full bg-color-1-800 text-white px-2 py-1" key={key}>
        {list.getItem(key)?.children}
      </Box>
    ))
  }, [list])
  return (
    <Box>
      <Typography tokens={{ size: 'h3' }}>Current selection</Typography>
      <Box customTheme="flex flex-wrap gap-2">{selectedKeysRender}</Box>
      <TagGroup
        {...rest}
        defaultSelectedKeys={defaultSelectedKeys}
        items={list.items}
        selectedKeys={list.selectedKeys}
        onSelectionChange={list.setSelectedKeys}
        onRemove={list.remove}
      />
    </Box>
  )
}

const TemplateErrorMessage = (args) => {
  const { items, ...rest } = args
  const list = useListData({ initialItems: items })
  const errorMessageData = 'You must select at least one tag'
  const [errorMessage, setErrorMessage] = useState(errorMessageData)
  return (
    <TagGroup
      {...rest}
      items={list.items}
      onSelectionChange={(keys) => {
        list.setSelectedKeys(keys)
        setErrorMessage(keys.size === 0 ? errorMessageData : undefined)
      }}
      errorMessage={errorMessage}
    />
  )
}

/**
 * @type {Meta}
 */
const meta = {
  title: 'Base Components/TagGroup',
  component: TagGroup,
  subcomponents: {
    Tag,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: {
      description: 'Label of the tag group. Gets rendered before the tags.',
    },
    description: {
      description: 'Description of the tag group. Gets rendered after the tags.',
    },
    removeButtonProps: {
      control: false,
      description:
        'Acts as a default for the remove button of all tags. Individual tags `props.item.props.removeButtonProps` take precedence.',
      table: {
        type: { summary: 'TButtonProps' },
        defaultValue: { summary: '{children: "❌"}' },
      },
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple'],
      table: {
        type: { summary: 'single | multiple | none' },
        defaultValue: { summary: 'multiple' },
      },
    },
    selectionBehavior: {
      control: 'select',
      options: ['toggle', 'replace'],
      description:
        'Behavior of the selection. `replace` will make the group behave like a radio group, as opposed to `toggle` that will behave like a checkbox group.',
      table: {
        defaultValue: { summary: 'toggle' },
        type: { summary: 'toggle | replace' },
      },
    },
    items: {
      table: {
        type: { summary: 'TTagItemProps[]' },
      },
    },
    children: {
      description:
        'Children containing items data, or a rendering function. You can either use the `items` prop with the `children` rendering function or pass the data in `children` directly.',
      table: {
        type: {
          summary:
            'ReactElement<TTagItemProps> | ReactElement<TTagItemProps>[] | ((item: TTagItemProps) => ReactElement<TTagItemProps>)',
        },
      },
      control: 'none',
    },
    onRemove: {
      description: 'Callback when a tag is removed. If passed, all tags will receive `allowRemoving: true`',
      table: {
        type: { summary: '(keys: Set<Key>) => void' },
      },
      control: false,
    },
    onSelectionChange: {
      description: 'Callback when a tag is selected.',
      table: {
        type: { summary: '(keys: "all" | Set<Key>) => void' },
      },
      control: false,
    },
    errorMessage: {
      description:
        'The TagGroup component itself does not do any validation concerning errors. If the error message is passed, it will necessarily be displayed. Control over if the error message is displayed or not must be done externally.',
      table: {
        type: { summary: 'string | undefined' },
      },
    },
    disallowEmptySelection: {
      description: 'Disables selecting the last selected tag, if there are any selected.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    selectedKeys: {
      description: 'The keys of the selected tags. Use for controlled selection along with `onSelectionChange`.',
      table: {
        type: { summary: 'Set<Key>' },
      },
    },
    defaultSelectedKeys: {
      description: 'Tags that are selected by default.',
      table: {
        type: { summary: 'Set<Key>' },
      },
    },
    disabledKeys: {
      description: 'Tags that are disabled. Can be styled using the `isDisabled` token.',
      table: {
        type: { summary: 'Set<Key>' },
      },
    },
  },
  args: {
    label: 'Places to visit',
    removeButtonProps: { children: '❌' },
    children: [
      <TagItem key="china">China</TagItem>,
      <TagItem key="japan">Japan</TagItem>,
      <TagItem key="korea">Korea</TagItem>,
    ],
  },
}

export default meta

/**
 * @type {Story}
 */
export const Default = {}

/**
 * @type {Story}
 */
export const Removable = {
  render: TemplateRemovable,
  args: {
    items: [
      { key: 'china', children: 'China' },
      { key: 'japan', children: 'Japan' },
      { key: 'korea', children: 'Korea' },
    ],
    children: (item) => <TagItem {...item} key={item.key} />,
  },
}

/**
 * @type {Story}
 */
export const Selectable = {
  args: {
    selectionMode: 'multiple',
  },
}

/**
 * @type {Story}
 */
export const ErrorMessage = {
  render: TemplateErrorMessage,
  args: {
    disallowEmptySelection: true,
    selectionMode: 'multiple',
  },
}

/**
 * @type {Story}
 */
export const MaximalProps = {
  name: 'Maximal Props (Controlled)',
  render: TemplateMaximalProps,
  args: {
    items: [
      { key: 'china', children: 'China' },
      { key: 'japan', children: 'Japan' },
      { key: 'korea', children: 'Korea' },
      { key: 'france', children: 'France' },
      { key: 'italy', children: 'Italy' },
      { key: 'spain', children: 'Spain' },
      { key: 'germany', children: 'Germany' },
      { key: 'portugal', children: 'Portugal' },
      { key: 'greece', children: 'Greece' },
    ],
    children: (item) => <TagItem {...item} key={item.key} />,
    selectionMode: 'multiple',
    description: 'Select the places you want to visit',
    disabledKeys: ['italy', 'germany'],
    defaultSelectedKeys: ['china', 'japan'],
  },
}

/**
 * @type {Story}
 */
export const Links = {
  args: {
    label: 'Navigate to your favorite places',
    children: [
      <TagItem key="china" href="https://www.china.com">
        China
      </TagItem>,
      <TagItem key="japan" href="https://www.japan.com">
        Japan
      </TagItem>,
      <TagItem key="korea" href="https://www.korea.com">
        Korea
      </TagItem>,
    ],
  },
}

/**
 * @type {Story}
 */
export const CustomRemoveButton = {
  render: TemplateRemovable,
  args: {
    items: [
      { key: 'china', children: 'China', removeButtonProps: { children: '🔴' } },
      { key: 'japan', children: 'Japan', removeButtonProps: { children: '⚠️' } },
      { key: 'korea', children: 'Korea' },
    ],
    children: (item) => <TagItem {...item} key={item.key} />,
  },
}
