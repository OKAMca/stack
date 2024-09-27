import TextArea from './index'

const Template = (args) => {
  const { backgroundColor, ...rest } = args
  return (
    <div className="flex flex-col m-auto h-screen justify-center items-center">
      <TextArea {...rest} />
    </div>
  )
}

export default {
  title: 'Form/Fields/Textarea',
  component: TextArea,

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    id: '',
    name: 'name',
    label: 'First name',
    placeholder: 'Message',
    required: true,
    disabled: false,
    isError: false,
    ariaLabel: 'Message',
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
