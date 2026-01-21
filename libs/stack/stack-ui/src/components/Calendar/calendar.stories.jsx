import { today } from '@internationalized/date'
import { useState } from 'react'
import Calendar from '.'
import { Box } from '../Box'
import { Typography } from '../Typography'
import CalendarCell from './components/CalendarCell'
import CalendarGrid from './components/CalendarGrid'
import NavigationButtons from './components/NavigationButtons'

/**
 * @typedef {import('@storybook/react-webpack5').Meta<typeof Calendar>} Meta
 * @typedef {import('@storybook/react-webpack5').Story<typeof Calendar>} Story
 */

function TemplateControlled(args) {
  const { onChange, defaultValue, ...rest } = args
  const [value, setValue] = useState(defaultValue)
  return (
    <Box customTheme="flex flex-wrap gap-8">
      <Box>
        <Typography tokens={{ size: 'h3' }}>Controller</Typography>
        <Calendar
          {...rest}
          defaultValue={defaultValue}
          value={value}
          onChange={(e) => {
            setValue(e)
            onChange?.(e)
          }}
        />
      </Box>
      <Box>
        <Typography tokens={{ size: 'h3' }}>Controlled</Typography>
        <Calendar {...rest} defaultValue={defaultValue} value={value} />
      </Box>
    </Box>
  )
}

/**
 * @type {Meta}
 */
const meta = {
  title: 'Base Components/Calendar',
  component: Calendar,
  subcomponents: {
    CalendarGrid,
    CalendarCell,
    NavigationButtons,
  },
  args: {
    onChange: value => console.log('Date changed', value),
  },
  argTypes: {
    isInvalid: {
      description: 'For controlled usage. In controlled and uncontrolled use cases, `isInvalid` is passed to tokens.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: 'react-aria',
        type: { summary: 'boolean' },
      },
    },
    isReadOnly: {
      description: 'For controlled usage. In controlled and uncontrolled use cases, `isReadOnly` is passed to tokens.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: 'react-aria',
        type: { summary: 'boolean' },
      },
    },
    isDateUnavailable: {
      description:
        'Callback function taking a single `date` argument and returning a boolean indicating if the date is unavailable.',
      table: {
        type: {
          summary: '(date: DateValue) => boolean',
        },
        category: 'react-aria',
      },
    },
    gridProps: {
      description: 'Props for the CalendarGrid component',
      table: {
        type: { summary: 'AriaCalendarGridProps' },
      },
    },
    weekdayStyle: {
      description: 'The style of the weekday labels',
      table: {
        type: { summary: 'abbreviated | narrow | short | long' },
        category: 'Grid Props',
      },
    },
    firstDayOfWeek: {
      description: 'Defines which day the grid starts with.',
      table: {
        defaultValue: {
          summary: 'sun',
          detail: 'In locale `en`, the default is `sun`, but in locale `fr`, the default is `mon`.',
        },
        type: {
          summary: 'sun | mon | tue | wed | thu | fri | sat',
        },
        category: 'Grid Props',
      },
    },
    startDate: {
      description: 'The first date to display in the grid.',
      table: {
        defaultValue: { summary: 'Date', detail: 'First visible date in the grid' },
        type: { summary: 'CalendarDate' },
        category: 'Grid Props',
      },
    },
    endDate: {
      description: 'The last date to display in the grid.',
      table: {
        defaultValue: { summary: 'Date', detail: 'Last visible date in the grid' },
        type: { summary: 'CalendarDate' },
        category: 'Grid Props',
      },
    },
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
export const Controlled = {
  render: TemplateControlled.bind({}),
  args: {
    defaultValue: today().add({ days: 1 }),
  },
}
