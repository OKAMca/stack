import SelectContent from '../../../storybook/SelectField'
import Select from './Select'

const Template = (args) => <SelectContent {...args} />

export default {
  title: 'Form/Fields/Select',
  component: Select,

  args: {
    id: 'season',
    name: 'season',
    label: 'Season',
    placeholderLabel: 'Select a season',
    onSelectionChange: () => console.log('test'),
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    disabled: true,
    icon: 'ChevronLeft',
  },
}

export const Error = {
  render: Template.bind({}),
  name: 'Error',

  args: {
    isError: true,
    errorMessage: 'This is an error message',
  },
}
