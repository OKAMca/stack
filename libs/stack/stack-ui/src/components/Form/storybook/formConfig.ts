import FormTextAreaField from '../components/fields/FormTextArea'
import FormTextInputField from '../components/fields/FormTextInputField'
import type { TFormField } from '../components/FormField/interface'
import { formConfig } from '../components/FormFieldDispatcher'

export const formConfigTest = formConfig({
  mapping: {
    base: 'type',
    variants: { variant: 'type' },
  },
  fields: {
    text_field: {
      default: FormTextInputField,
      themeKey: 'textInputField',
      variants: {
        variant1: {
          default: FormTextInputField,
        },
      },
    },
    text_area: {
      default: FormTextAreaField,
      themeKey: 'textAreaField',
    },
  },
})

export const fieldsTest: TFormField[] = [
  {
    tokens: {
      width: 'half',
    },
    type: 'text_field',
    item: {
      id: 'first-name',
      label: 'First Name',
      name: 'firstName',
      placeholder: 'Enter your first name',
      required: true,
      disabled: false,
      isError: false,
      ariaLabel: 'First name input',
    },
    validation: {
      type: 'string',
      minLength: {
        value: 10,
        errorMessage: 'First name should be at least 10 characters long',
      },
    },
  },
  {
    tokens: {
      width: 'half',
    },
    type: 'text_field',
    item: {
      id: 'last-name',
      label: 'Last Name',
      name: 'lastName',
      placeholder: 'Enter your last name',
      required: true,
      disabled: false,
      isError: false,
      ariaLabel: 'Last name input',
    },
  },
  {
    type: 'text_field',
    item: {
      id: 'email',
      label: 'Email Address',
      name: 'email',
      placeholder: 'Enter your email address',
      required: true,
      disabled: false,
      isError: false,
      ariaLabel: 'Email input',
    },
  },
  {
    type: 'text_field',
    item: {
      id: 'password',
      label: 'Password',
      name: 'password',
      placeholder: 'Enter your password',
      required: true,
      disabled: false,
      isError: false,
      ariaLabel: 'Password input',
    },
  },
  {
    type: 'text_area',
    item: {
      id: 'description',
      label: 'Description',
      name: 'description',
      placeholder: 'Enter description',
      required: true,
      disabled: false,
      isError: false,
      ariaLabel: 'Description input',
    },
  },
]
