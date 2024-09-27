import Radio from '../Radio/index'
import RadioGroup from './index'

const Template = (args) => {
  return (
    <RadioGroup label="Question 1/12" {...args}>
      <Radio id="item1" label="Item 1" name="item" value="1" aria-label="Choose item 1" />
      <Radio id="item2" label="Item 2" name="item" value="2" aria-label="Choose item 2" />
      <Radio id="item3" label="Item 3" name="item" value="3" aria-label="Choose item 3" />
    </RadioGroup>
  )
}

const TemplateError = (args) => {
  return (
    <RadioGroup label="Question 2/12" {...args}>
      <Radio id="item4" label="Item 1" name="item" value="1" aria-label="Choose item 1" />
      <Radio id="item5" label="Item 2" name="item" value="2" aria-label="Choose item 2" />
      <Radio id="item6" label="Item 3" name="item" value="3" aria-label="Choose item 3" />
    </RadioGroup>
  )
}

export default {
  title: 'Form/Fields/RadioGroup',
  component: RadioGroup,
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
