import MailIcon from '../../icons/Mail'
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
    label: 'First Name',
    name: 'name',
    placeholder: 'Your name here',
    isDisabled: false,
    isError: false,
    ariaLabel: 'First name',
    errorIcon: 'Error',
    onChange: (value) => console.log(`Value is now ${value}`),
    onBlur: (e) => console.log(`Value was ${e.target.value} when the field was blurred`),
    onFocus: () => console.log('Was focused'),
  },
  argTypes: {
    themeName: {
      defaultValue: {
        summary: 'textInput',
      },
    },
    isDisabled: {
      defaultValue: {
        summary: false,
      },
    },
    isRequired: {
      defaultValue: {
        summary: false,
      },
    },
    errorIcon: {
      description:
        "The error icon's visibility does **not** rely on the presence of the `errorMessage` prop. To display it only when there is an error, use the `isError` token",
    },
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    id: 'default',
    isRequired: true,
  },
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    id: 'disabled',
    isDisabled: true,
  },
}

export const Error = {
  render: Template.bind({}),
  name: 'Error',

  args: {
    id: 'error',
    errorMessage: 'This is an error message',
    isError: true,
  },
}

export const ErrorWithIcon = {
  render: Template.bind({}),
  name: 'ErrorWithIcon',

  args: {
    id: 'error-with-icon',
    errorMessage: 'This is an error message',
    isError: true,
    icon: <MailIcon width={16} height={16} />,
  },
}
