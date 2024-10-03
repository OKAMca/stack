import CheckboxGroupItem from './components/CheckboxGroupItem'
import CheckboxGroup from './index'

const Template = (args) => {
  return (
    <CheckboxGroup label="Question 1/12" {...args}>
      <CheckboxGroupItem id="item1" label="Item 1" name="item" value="1" ariaLabel="Item 1" />
      <CheckboxGroupItem id="item2" label="Item 2" name="item" value="2" ariaLabel="Item 2" />
      <CheckboxGroupItem id="item3" label="Item 3" name="item" value="3" ariaLabel="Item 3" />
    </CheckboxGroup>
  )
}

const TemplateError = (args) => {
  return (
    <CheckboxGroup label="Question 2/12" {...args}>
      <CheckboxGroupItem id="item4" label="Item 1" name="item" value="1" ariaLabel="Item 1" />
      <CheckboxGroupItem id="item5" label="Item 2" name="item" value="2" ariaLabel="Item 2" />
      <CheckboxGroupItem id="item6" label="Item 3" name="item" value="3" ariaLabel="Item 3" />
    </CheckboxGroup>
  )
}

export default {
  title: 'Form/Fields/CheckboxGroup',
  component: CheckboxGroup,
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    isDisabled: true,
  },
}

export const Error = {
  render: TemplateError.bind({}),
  name: 'Error',

  args: {
    isError: true,
    errorMessage: 'This is an error message',
  },
}
