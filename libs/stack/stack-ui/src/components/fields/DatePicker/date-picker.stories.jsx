import DateRangePicker from './DateRangePicker'
import DatePicker from '.'

const DatePickerTemplate = (args) => (
  <div style={{ minHeight: '500px' }}>
    <DatePicker {...args} />
  </div>
)
const DateRangePickerTemplate = (args) => (
  <div style={{ minHeight: '500px' }}>
    <DateRangePicker {...args} />
  </div>
)

export default {
  title: 'Form/Fields/DatePicker',
  component: DatePicker,

  args: {
    label: 'Filter by date',
    onChange: (date) => console.log(date),
  },
}

export const Default = {
  render: DatePickerTemplate.bind({}),

  args: {
    buttonLabel: 'Date Picker',
  },

  name: 'Default',
}

export const DateFieldAndIcon = {
  render: DatePickerTemplate.bind({}),
  name: 'Date Field and Icon',
}

export const OnlyIcon = {
  render: DatePickerTemplate.bind({}),

  args: {
    tokens: {
      dateFieldShown: false,
    },
  },

  name: 'Only Icon',
}

export const DateRangePickerStory = {
  render: DateRangePickerTemplate.bind({}),

  args: {
    buttonLabel: 'Date Range Picker',
  },

  name: 'Date Range Picker',
}
