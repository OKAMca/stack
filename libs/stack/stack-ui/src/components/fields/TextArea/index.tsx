'use client'

import type { RegisterOptions } from 'react-hook-form'
import type { TToken } from '../../../providers/Theme/interface'
import type { TTextInputProps } from '../TextInputField/interface'
import { isEmpty } from 'radashi'
import * as React from 'react'
import { useRef } from 'react'
import { FocusRing, useTextField } from 'react-aria'
import { Controller, useFormContext } from 'react-hook-form'
import useThemeContext from '../../../providers/Theme/hooks'
import { useTranslation } from '../../../providers/Translation'
import { Typography } from '../../Typography'

export function TextArea<T extends TToken>(props: TTextInputProps<T>) {
  const {
    id,
    label,
    name,
    placeholder,
    required,
    disabled = false,
    errorMessage,
    ariaLabel,
    value,
    onBlur,
    onChange,
    fieldRef,
    themeName = 'textarea',
    tokens,
    customTheme,
    children,
  } = props
  const ref = useRef<HTMLTextAreaElement | null>(null)
  const { errorMessageProps, inputProps, labelProps } = useTextField<'textarea' | 'input'>(props, ref)

  const inputTokens = { ...tokens, isDisabled: disabled, isError: errorMessage != null }

  const wrapper = useThemeContext(`${themeName}.wrapper`, inputTokens, customTheme)
  const input = useThemeContext(`${themeName}.input`, inputTokens, customTheme)
  const labelTheme = useThemeContext(`${themeName}.label`, inputTokens, customTheme)
  const container = useThemeContext(`${themeName}.container`, inputTokens, customTheme)

  return (
    <div>
      <div className={wrapper} aria-disabled={disabled ? 'true' : 'false'}>
        {label != null && (
          <label className={labelTheme} {...labelProps}>
            {label}
          </label>
        )}
        <FocusRing focusRingClass="has-focus-ring">
          <div className={container}>
            {children}
            <textarea
              {...(inputProps as object)}
              ref={(e) => {
                fieldRef?.(e)
                ref.current = e
              }}
              className={input}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              id={id}
              name={name}
              aria-label={ariaLabel}
              aria-labelledby={id}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            />
          </div>
        </FocusRing>
      </div>
      {errorMessage != null && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={inputTokens} {...errorMessageProps}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export function ReactHookFormTextArea({
  name,
  label,
  rules,
  tokens,
  ariaLabel,
  defaultValue = '',
  placeholder = '',
  themeName = 'textarea',
  isReadOnly = false,
  minLength,
  maxLength,
  required,
  isRequired,
  onChange,
  onBlur,
  children = null,
  ...rest
}: TTextInputProps & { rules: RegisterOptions }) {
  const { control } = useFormContext()
  const { t } = useTranslation()

  const getAriaFields = () => {
    const ariaFields = Object.entries(rest).filter(([key, _value]) => key.startsWith('aria-'))
    return Object.fromEntries(ariaFields)
  }

  const ruleMerged = {
    required: (required ?? isRequired) ? (t('FORM.ERROR.REQUIRED') ?? 'required') : false,
    ...(minLength != null && {
      minLength: {
        value: minLength,
        message: t('FORM.ERROR.MIN_LENGTH', { length: minLength }),
      },
    }),
    ...(maxLength != null && {
      maxLength: {
        value: maxLength,
        message: t('FORM.ERROR.MAX_LENGTH', { length: maxLength }),
      },
    }),
    ...rules,
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={ruleMerged}
      disabled={rules?.disabled}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const { ref, ...fieldProps } = field
        const isError = !isEmpty(fieldState.error)

        const validityField = {
          isDisabled: field.disabled ?? false,
          isRequired: rules?.required === true || rules?.required === 'required',
          isInvalid: fieldState.invalid,
          isError,
          isReadOnly,
        }

        const inputTokens = {
          ...tokens,
          ...validityField,
        }

        return (
          <TextArea
            {...fieldProps}
            {...validityField}
            {...getAriaFields()}
            fieldRef={ref}
            name={name}
            placeholder={placeholder}
            themeName={themeName}
            label={label}
            tokens={inputTokens}
            ariaLabel={ariaLabel}
            isDisabled={field.disabled}
            isRequired={rules?.required === true || rules?.required === 'required'}
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              field.onChange(e)
              onChange?.(e)
            }}
            onBlur={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              field.onBlur()
              onBlur?.(e)
            }}
          >
            {children}
          </TextArea>
        )
      }}
    />
  )
}
