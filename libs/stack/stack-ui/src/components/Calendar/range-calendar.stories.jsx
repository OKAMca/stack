import { today } from '@internationalized/date'
import { useState } from 'react'
import Box from '../Box'
import Typography from '../Typography'
import RangeCalendar from './RangeCalendar'

const TemplateControlled = (args) => {
  const { onChange, defaultValue, ...rest } = args
  const [value, setValue] = useState(defaultValue)
  return (
    <Box customTheme="flex flex-wrap gap-8">
      <Box>
        <Typography tokens={{ size: 'h3' }}>Controller</Typography>
        <RangeCalendar
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
        <RangeCalendar {...rest} defaultValue={defaultValue} value={value} />
      </Box>
    </Box>
  )
}

/**
 * @typedef {import('@storybook/react').Meta<typeof RangeCalendar>} Meta
 * @typedef {import('@storybook/react').StoryObj<typeof RangeCalendar>} Story
 */

/**
 * @type {Meta}
 */
const meta = {
  title: 'Base Components/Range Calendar',
  component: RangeCalendar,
  argTypes: {
    allowsNonContiguousRanges: {
      description: 'Determines wether a date range may contain unavailable dates.',
      table: {
        type: { summary: 'boolean' },
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
    defaultValue: {
      start: today().add({ days: 1 }),
      end: today().add({ days: 5 }),
    },
  },
}
