import type { JSONSchemaType } from 'ajv'
import type { FieldValues } from 'react-hook-form'
import type { TFormField } from '../components/FormField/interface'
import type { TFormFieldValidation } from '../interface'

const getStringValidations = <T>(fieldValidation: TFormFieldValidation) => {
  const stringProperties: JSONSchemaType<T>['properties'] = {}

  if (fieldValidation.minLength?.value !== undefined) {
    stringProperties.minLength = fieldValidation.minLength.value
    stringProperties.errorMessage = {
      ...stringProperties.errorMessage,
      minLength: fieldValidation.minLength.errorMessage,
    }
  }
  if (fieldValidation.maxLength?.value !== undefined) {
    stringProperties.maxLength = fieldValidation.maxLength
  }
  if (fieldValidation.pattern?.value !== undefined) {
    stringProperties.pattern = fieldValidation.pattern
  }

  return stringProperties
}

const generateValidationSchema = <T extends FieldValues>(fields: TFormField[]): JSONSchemaType<T> => {
  const baseSchema: JSONSchemaType<T> = {
    type: 'object',
    properties: {},
    required: [],
    additionalProperties: false,
  }

  fields.forEach((field) => {
    if (field.item && field.item.name) {
      const { name } = field.item

      let schema: JSONSchemaType<T>['properties'] = { type: field.validation?.type }

      if (field.validation) {
        schema = { ...schema, ...getStringValidations(field.validation) }
        if (field.validation.required?.value) {
          baseSchema.required!.push(name)
        }
      }

      baseSchema.properties[name] = schema
    }
  })

  return baseSchema
}

export default generateValidationSchema
