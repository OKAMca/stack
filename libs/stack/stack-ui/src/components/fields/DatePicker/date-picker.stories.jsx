import { today, getLocalTimeZone, isWeekend } from '@internationalized/date'
import { useState } from 'react'
import Box from '../../Box'
import Calendar from '../../Calendar'
import { CalendarPopover } from './components/CalendarPopover'
import DatePicker from '.'

/**
 * @typedef {import('@storybook/react').Meta<typeof DatePicker>} Meta
 * @typedef {import('@storybook/react').StoryObj<typeof DatePicker>} Story
 */

const Template = (args) => (
  <Box customTheme="min-h-[500px] flex justify-center w-full">
    <DatePicker {...args} />
  </Box>
)

const TemplateControlled = (args) => {
  const { defaultValue, onChange, ...rest } = args
  const [value, setValue] = useState(defaultValue)
  return (
    <Box customTheme="min-h-[500px] flex justify-center w-full">
      <Calendar
        {...rest}
        value={value}
        onChange={(e) => {
          setValue(e)
          onChange(e)
        }}
      />
      <DatePicker
        {...rest}
        value={value}
        onChange={(e) => {
          setValue(e)
          onChange(e)
        }}
      />
    </Box>
  )
}

/**
 * @type {Meta}
 */
const meta = {
  title: 'Form/Fields/DatePicker',
  component: DatePicker,
  subcomponents: {
    Calendar,
    CalendarPopover,
  },
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'Filter by date',
    onChange: (date) => console.log(date),
    invalidIndicator: 'Invalid date',
  },
  argTypes: {
    themeName: {
      table: {
        defaultValue: { summary: 'datePicker' },
      },
    },
    value: {
      description: 'For controlled usage only. Use in conjonction with `onChange` to control the date picker.',
      table: {
        category: 'react-aria',
      },
    },
    onChange: {
      description: 'For controlled usage only. Use in conjonction with `value` to control the date picker.',
      table: {
        type: { summary: '(value: DateValue | null) => void' },
        category: 'react-aria',
      },
    },
    isDisabled: {
      description: 'For controlled usage. In controlled and uncontrolled use cases, `isDisabled` is passed to tokens.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: 'react-aria',
        type: { summary: 'boolean' },
      },
    },
    isOpen: {
      description: 'For controlled usage. In controlled and uncontrolled use cases, `isOpen` is passed to tokens.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: 'react-aria',
        type: { summary: 'boolean' },
      },
    },
    isRequired: {
      description: 'For controlled usage. In controlled and uncontrolled use cases, `isRequired` is passed to tokens.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: 'react-aria',
        type: { summary: 'boolean' },
      },
    },
    invalidIndicator: {
      description:
        'The indicator to render when the date, or one of the dates in the date range (if applicable), is invalid.',
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: {
          summary: '❌',
        },
      },
    },
    label: {
      description: 'The label of the date picker.',
      table: {
        type: {
          summary: 'string',
        },
        category: 'react-aria',
      },
    },
    granularity: {
      description:
        'Determines the smallest unit that is displayed in the date picker. By default, this is `day` for dates, and `minute` for times.',
      table: {
        defaultValue: {
          summary: 'day',
        },
        category: 'react-aria',
      },
    },
    placeholderValue: {
      description: 'The placeholder value to render in the date field.',
      table: {
        type: {
          summary: 'string',
        },
        category: 'react-aria',
      },
    },
    popoverPlacement: {
      table: {
        defaultValue: {
          summary: 'bottom start',
        },
        category: 'react-aria',
      },
    },
    placement: {
      description: 'The placement of the popover.',
      table: {
        defaultValue: {
          summary: 'bottom start',
        },
        category: 'react-aria',
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

/**
 * @type {Story}
 */
export const Default = {
  render: Template.bind({}),
  args: {
    buttonLabel: 'Date Picker',
    buttonContent: 'Select Date',
  },
  name: 'Default',
}

/**
 * @type {Story}
 */
export const DateFieldAndIcon = {
  render: Template.bind({}),
  name: 'Date Field and Icon',
}

/**
 * @type {Story}
 */
export const OnlyIcon = {
  render: Template.bind({}),
  args: {
    tokens: {
      dateFieldShown: false,
    },
  },
  name: 'Only Icon',
}

/**
 * @type {Story}
 */
export const Controlled = {
  render: TemplateControlled.bind({}),
  name: 'Controlled',
}

/**
 * @type {Story}
 */
export const UnavailableDates = {
  render: Template.bind({}),
  name: 'Unavailable Dates',
  args: {
    buttonContent: 'Select Date',
    minValue: today(getLocalTimeZone()),
    isDateUnavailable: (date) => {
      const now = today(getLocalTimeZone())
      const disabledRanges = [
        [now, now.subtract({ days: 5 })],
        [now.add({ days: 14 }), now.add({ days: 16 })],
        [now.add({ days: 23 }), now.add({ days: 24 })],
      ]
      const isUnavailable =
        isWeekend(date, 'en-CA') ||
        disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0)
      return isUnavailable
    },
  },
}
