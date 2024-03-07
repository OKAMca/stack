import type { JSONSchemaType } from 'ajv'
import type { FieldValues } from 'react-hook-form'
import FormTextInputField from '../components/fields/FormTextInputField'
import type { TFormField } from '../components/FormField/interface'
import type { TFormFieldDispatcherConfig } from '../components/FormFieldDispatcher/interface'

export const formConfig: TFormFieldDispatcherConfig = {
  mapping: {
    base: 'type',
  },
  fields: {
    text_field: {
      default: FormTextInputField,
    },
  },
}

export const formSchemaTest: JSONSchemaType<FieldValues> = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      minLength: 10,
      nullable: true,
      errorMessage: { minLength: 'firstname should be longer than 10' },
    },
    lastName: {
      type: 'string',
      minLength: 1,
      nullable: true,
      errorMessage: { minLength: 'lastname is required' },
    },
    email: {
      type: 'string',
      minLength: 1,
      nullable: true,
      errorMessage: { minLength: 'email is required' },
    },
    password: {
      type: 'string',
      minLength: 1,
      nullable: true,
      errorMessage: { minLength: 'password is required' },
    },
  },
  additionalProperties: false,
}

export const fieldsTest: TFormField[] = [
  {
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
]
