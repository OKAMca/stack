import TextInputField from './index'

const Template = (args) => {
  const { backgroundColor, ...rest } = args
  return (
    <div className="flex flex-col m-auto justify-center items-center">
      <TextInputField {...rest} />
    </div>
  )
}

export default {
  title: 'Form/Fields/Text Input',
  component: TextInputField,

  args: {
    id: '',
    label: 'First Name',
    name: 'name',
    placeholder: 'Your name here',
    isDisabled: false,
    isError: false,
    ariaLabel: 'First name',
    icon: 'ArrowRight',
    onChange: (value) => console.log(`Value is now ${value}`),
    onBlur: (e) => console.log(`Value was ${e.target.value} when the field was blurred`),
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    isRequired: true,
  },
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    isDisabled: true,
  },
}

export const Error = {
  render: Template.bind({}),
  name: 'Error',

  args: {
    errorMessage: 'This is an error message',
    isError: true,
  },
}
