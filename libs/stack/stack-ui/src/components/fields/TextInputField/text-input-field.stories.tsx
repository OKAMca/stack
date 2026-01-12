import type { Meta, StoryObj } from '@storybook/react'
import { type ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import ButtonComponent from '../../Button'
import ErrorIcon from '../../icons/ErrorIcon'
import MailIcon from '../../icons/Mail'
import { ReactHookFormInput as TextInputField } from './index'

const Template = (args: ComponentProps<typeof TextInputField>) => {
  return (
    <div className="flex flex-col m-auto justify-center items-center">
      <TextInputField {...args} />
    </div>
  )
}

const meta: Meta<typeof TextInputField> = {
  title: 'Form/Fields/Text Input',
  component: TextInputField,

  args: {
    label: 'First Name',
    name: 'name',
    placeholder: 'Your name here',
    isDisabled: false,
    isError: false,
    ariaLabel: 'First name',
    errorIcon: <ErrorIcon width={16} height={16} />,
    onChange: (value) => console.log(`Value is now ${value}`),
    onBlur: (e) => console.log(`Value was ${e.target.value} when the field was blurred`),
    icon: <MailIcon width={16} height={16} />,
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

export default meta

export const Default: StoryObj<typeof TextInputField> = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    id: 'default',
    isRequired: true,
  },
}

export const Disabled: StoryObj<typeof TextInputField> = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    id: 'disabled',
    isDisabled: true,
  },
}

export const Error: StoryObj<typeof TextInputField> = {
  render: Template.bind({}),
  name: 'Error',
  decorators: [
    (Story) => {
      const methods = useFormContext<{ 'email-error': string }>()
      return (
        <>
          <ButtonComponent
            tokens={{ className: 'mb-4 mx-auto' }}
            handlePress={() =>
              methods.formState.errors['email-error']
                ? methods.clearErrors('email-error')
                : methods.setError('email-error', { message: 'Invalid email address' })
            }
          >
            Toggle error
          </ButtonComponent>
          <Story />
        </>
      )
    },
  ],
  args: {
    id: 'error',
    errorMessage: 'This is an error message',
    isError: true,
    name: 'email-error',
  },
}
