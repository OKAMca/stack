import { useState } from 'react'
import Box from '../../Box'
import RangeCalendar from '../../Calendar/RangeCalendar'
import DateRangePicker from './DateRangePicker'

const Template = (args) => (
  <div style={{ minHeight: '500px' }}>
    <DateRangePicker {...args} />
  </div>
)

const TemplateControlled = (args) => {
  const { defaultValue, onChange, ...rest } = args
  const [value, setValue] = useState(defaultValue)
  return (
    <Box>
      <RangeCalendar
        {...rest}
        value={value}
        onChange={(e) => {
          onChange(e)
          setValue(e)
        }}
      />
      <DateRangePicker
        {...rest}
        value={value}
        onChange={(e) => {
          onChange(e)
          setValue(e)
        }}
      />
    </Box>
  )
}

/**
 * @type {import('@storybook/react').Meta<typeof DateRangePicker>}
 */
const meta = {
  title: 'Form/Fields/DateRangePicker',
  component: DateRangePicker,
  args: {
    buttonContent: 'Select Date',
    label: 'Filter by date',
    onChange: (date) => console.log(date),
  },
  argTypes: {
    popoverPlacement: {
      description: 'The placement of the popover.',
      table: {
        defaultValue: {
          summary: 'bottom start',
        },
      },
    },
    children: {
      description:
        'The children to render inside the popover. Children are rendered inside the dialog, right before the inner date fields.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    innerDateFieldSeparator: {
      description: 'The separator to render between the start and end date fields that are inside the popover.',
      table: {
        defaultValue: {
          summary: ' - ',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
    outerDateFieldSeparator: {
      description: 'The separator to render between the start and end date fields that are outside the popover.',
      table: {
        defaultValue: {
          summary: ' - ',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
    buttonContent: {
      description: 'The content of the button. Renders alongside the icon.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    icon: {
      description: 'The icon to render inside the button.',
      table: {
        defaultValue: {
          summary: 'ArrowDown',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
    buttonLabel: {
      description: 'The label of the button. Renders before the actual open button.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
}

export default meta

export const Default = {
  render: Template.bind({}),
  args: {
    buttonLabel: 'Date Picker',
  },
  name: 'Default',
}

export const DateFieldAndIcon = {
  render: Template.bind({}),
  name: 'Date Field and Icon',
}

export const OnlyIcon = {
  render: Template.bind({}),
  args: {
    tokens: {
      dateFieldShown: false,
    },
  },
  name: 'Only Icon',
}

export const Controlled = {
  render: TemplateControlled.bind({}),
  name: 'Controlled',
}
