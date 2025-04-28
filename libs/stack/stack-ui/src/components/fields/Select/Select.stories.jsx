import Select from './Select'

export default {
  title: 'Form/Fields/Select',
  component: Select,
  args: {
    id: 'season',
    label: 'Season',
    placeholderLabel: 'Select a season',
    onSelectionChange: () => console.log('test'),
  },
}

const defaultOptions = [
  { key: '1', value: 'Option 1' },
  { key: '2', value: 'Option 2' },
  { key: '3', value: 'Option 3' },
  { key: '4', value: 'Option 4' },
  { key: '5', value: 'Option 5' },
]

// Create a template for all stories
const Template = (args) => <Select {...args} />

export const Default = {
  render: Template.bind({}),
  name: 'Default',
  args: {
    name: 'season-default',
    options: defaultOptions,
  },
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',
  args: {
    name: 'season-disabled',
    disabled: true,
    icon: 'ChevronLeft',
    options: defaultOptions,
  },
}

export const Error = {
  render: Template.bind({}),
  name: 'Error',
  args: {
    name: 'season-error',
    isError: true,
    errorMessage: 'This is an error message',
    options: defaultOptions,
  },
}

export const WithSections = {
  render: Template.bind({}),
  name: 'With Sections',
  args: {
    name: 'season-with-sections',
    options: [
      { key: 'header-1', value: 'Section 1' },
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
      { key: 'header-2', value: 'Section 2' },
      { key: '4', value: 'Option 4' },
      { key: '5', value: 'Option 5' },
      { key: '6', value: 'Option 6' },
      { key: '7', value: 'Option 7' },
    ],
  },
}
