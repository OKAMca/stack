import RangeCalendar from './RangeCalendar'
import Calendar from '.'

const CalendarTemplate = (args) => <Calendar {...args} />
const RangeCalendarTemplate = (args) => <RangeCalendar {...args} />

export default {
  title: 'Base Components/Calendar',
  component: Calendar,

  args: {
    label: 'Filter by date',
    variant: 'primary',
  },
}

export const CalendarStory = {
  render: CalendarTemplate.bind({}),
  name: 'Calendar',
}

export const RangeCalendarStory = {
  render: RangeCalendarTemplate.bind({}),
  name: 'Range Calendar',
}
