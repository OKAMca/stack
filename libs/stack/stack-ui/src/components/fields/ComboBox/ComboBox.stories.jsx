import ComboBox from './ComboBox'

export default {
  title: 'Form/Fields/ComboBox',
  component: ComboBox,
  args: {
    id: 'brand',
    name: 'brand',
    label: 'Brand',
    placeholder: 'Select a brand',
    allowsCustomValue: true,
    menuTrigger: 'focus',
    onSelectionChange: () => console.log('selection changed'),
    onInputChange: () => console.log('input changed'),
    options: [
      { key: '1', value: 'CTV' },
      { key: '2', value: 'TSN' },
      { key: '3', value: 'Crave' },
    ],
  },
}

const defaultOptions = [
  { key: '1', value: 'CTV' },
  { key: '2', value: 'TSN' },
  { key: '3', value: 'Crave' },
  { key: '4', value: 'CTV Comedy' },
  { key: '5', value: 'CTV Sci-fi' },
  { key: '6', value: 'CTV Drama' },
  { key: '7', value: 'CTV News' },
]

// Create a template for all stories
const Template = (args) => <ComboBox {...args} />

export const Default = {
  render: Template.bind({}),
  name: 'Default',
  args: {
    name: 'brand-default',
    options: defaultOptions,
  },
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',
  args: {
    name: 'brand-disabled',
    disabled: true,
    icon: 'ChevronLeft',
    options: defaultOptions,
  },
}

export const WithError = {
  render: Template.bind({}),
  name: 'With Error',
  args: {
    name: 'brand-error',
    isError: true,
    errorMessage: 'This is an error message',
    options: defaultOptions,
  },
}

export const WithSections = {
  render: Template.bind({}),
  name: 'With Sections',
  args: {
    name: 'brand-with-sections',
    options: [
      { key: 'header-1', value: 'CTV Network' },
      { key: '1', value: 'CTV' },
      { key: '2', value: 'CTV Comedy' },
      { key: '3', value: 'CTV Sci-fi' },
      { key: 'header-2', value: 'Sports' },
      { key: '4', value: 'TSN' },
      { key: '5', value: 'TSN2' },
      { key: 'header-3', value: 'Streaming' },
      { key: '6', value: 'Crave' },
      { key: '7', value: 'CTV News' },
    ],
  },
}

export const AllowsCustomValue = {
  render: Template.bind({}),
  name: 'Allows Custom Value',
  args: {
    name: 'brand-custom',
    allowsCustomValue: true,
    options: defaultOptions,
  },
}

export const FocusTrigger = {
  render: Template.bind({}),
  name: 'Focus Trigger',
  args: {
    name: 'brand-focus',
    menuTrigger: 'focus',
    options: defaultOptions,
  },
}
