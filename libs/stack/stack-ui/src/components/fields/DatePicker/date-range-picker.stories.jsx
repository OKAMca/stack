import { today, getLocalTimeZone, isWeekend } from '@internationalized/date'
import { useState } from 'react'
import Box from '../../Box'
import RangeCalendar from '../../Calendar/RangeCalendar'
import DateRangePicker from './DateRangePicker'

/**
 * @typedef {import('@storybook/react').Meta<typeof DateRangePicker>} Meta
 * @typedef {import('@storybook/react').StoryObj<typeof DateRangePicker>} Story
 */

const Template = (args) => (
  <Box customTheme="min-h-[500px] flex justify-center w-full">
    <DateRangePicker {...args} />
  </Box>
)

const TemplateControlled = (args) => {
  const { defaultValue, onChange, ...rest } = args
  const [value, setValue] = useState(defaultValue)
  return (
    <Box customTheme="min-h-[500px] flex justify-center w-full">
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
 * @type {Meta}
 */
const meta = {
  title: 'Form/Fields/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    buttonContent: 'Select Date',
    label: 'Filter by date',
    onChange: (date) => console.log(date),
    innerDateFieldSeparator: ' to ',
    outerDateFieldSeparator: ' to ',
    invalidIndicator: 'Invalid date',
  },
  argTypes: {
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
