import type { TStyleValue } from 'libs/stack/stack-ui/src/providers/Theme/interface'
import type { TDefaultComponent } from 'libs/stack/stack-ui/src/types/components'
import type { FunctionComponent } from 'react'
import type { TFormField } from '../FormField/interface'

export interface TFormFieldDispatcherProps extends TDefaultComponent {
  config: TFormFieldDispatcherConfig
  fields: TFormField[]
}

export interface TFormFieldDispatcherConfig {
  mapping: TFormFieldDispatcherMappingConfig
  fields: TFormFieldDispatcherFieldsConfig
}

interface TFormFieldDispatcherMappingConfig {
  base: string
  variants?: string[]
}

interface TFormFieldDispatcherFieldsConfig {
  [fieldType: string]: {
    default: FunctionComponent
    theme?: TStyleValue[]
    variants?: TFormFieldDispatcherFieldsConfig
  }
}
