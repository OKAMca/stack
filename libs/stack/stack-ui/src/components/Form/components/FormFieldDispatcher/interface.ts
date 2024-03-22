import type { TDefaultComponent } from 'libs/stack/stack-ui/src/types/components'
import type { FunctionComponent } from 'react'
import type { TFormField } from '../FormField/interface'

export type TFormConfig = {
  <B extends string, V extends TFormConfigVariants<B>>(
    config: TFormFieldDispatcherConfig<B, V>,
  ): TFormFieldDispatcherConfig<B, V>
}

export interface TFormFieldDispatcherProps extends TDefaultComponent {
  config: TFormFieldDispatcherConfig<string, TFormConfigVariants<string>>
  fields: TFormField[]
}

export type TFormFieldDispatcherConfig<B extends string, V extends TFormConfigVariants<B>> = {
  mapping: TFormFieldDispatcherMappingConfig<B, V>
  fields: TFormFieldDispatcherFieldsConfig
}

interface TFormFieldDispatcherMappingConfig<B extends string, V extends TFormConfigVariants<B>> {
  base: B
  variants?: V
}

export type TFormConfigVariants<B extends string> = {
  [key: string]: B
}

interface TFormFieldDispatcherFieldConfig {
  default: FunctionComponent
  themeKey?: string
}

export interface TDispatchedField extends TFormFieldDispatcherFieldConfig {
  variants?: {
    [variant: string]: TFormFieldDispatcherFieldConfig
  }
}

export interface TFormFieldDispatcherFieldsConfig {
  [fieldType: string]: TDispatchedField
}
