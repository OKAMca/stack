'use client'

import { FocusRing } from '@react-aria/focus'
import { isEmpty } from 'radashi'
import type { ChangeEvent } from 'react'
import { useRef } from 'react'
import { useTextField } from 'react-aria'
import type { Control, RegisterOptions } from 'react-hook-form'
import { Controller, get, useFormContext } from 'react-hook-form'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TToken } from '../../../providers/Theme/interface'
import { useTranslation } from '../../../providers/Translation'
import Box from '../../Box'
import Typography from '../../Typography'
import type { TTextInputProps } from './interface'

const TextInputField = (props: TTextInputProps) => {
  const {
    label,
    isRequired = false,
    isDisabled = false,
    isInvalid = false,
    required,
    disabled,
    errorMessage,
    fieldRef,
    children,
    themeName = 'textInput',
    tokens,
    customTheme,
    ariaLabel,
    placeholder,
    isReadOnly = false,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement | null>(null)

  const legacyRequired = required ?? isRequired
  const legacyDisabled = disabled ?? isDisabled

  // Get React Aria's TextField props
  const { labelProps, inputProps, errorMessageProps } = useTextField(
    {
      label,
      errorMessage,
      isRequired: legacyRequired,
      isDisabled: legacyDisabled,
      isInvalid,
      isReadOnly,
      ...rest,
    },
    inputRef,
  )

  const mergeRefs = (ref: HTMLInputElement) => {
    if (ref) {
      fieldRef?.(ref)
      inputRef.current = ref
    }
  }

  const input = useThemeContext(`${themeName}.input`, tokens)

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <Box
          aria-disabled={inputProps.disabled}
          themeName={`${themeName}.wrapper`}
          tokens={tokens}
          customTheme={customTheme}
        >
          {label && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <Box as="label" tokens={tokens} themeName={`${themeName}.label`} customTheme={customTheme} {...labelProps}>
              {label}
            </Box>
          )}
          <Box themeName={`${themeName}.container`} tokens={tokens} customTheme={customTheme}>
            {children}
            <input aria-label={ariaLabel} {...inputProps} placeholder={placeholder} ref={mergeRefs} className={input} />
          </Box>
        </Box>
      </FocusRing>
      {errorMessage && (
        <Typography
          themeName={`${themeName}.errorMessage`}
          tokens={tokens}
          customTheme={customTheme}
          {...errorMessageProps}
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export const ReactHookFormInput = ({
  name,
  label,
  rules,
  tokens,
  ariaLabel,
  defaultValue = '',
  placeholder = '',
  themeName = 'textInput',
  isReadOnly = false,
  minLength,
  maxLength,
  required,
  isRequired,
  onChange,
  onBlur,
}: TTextInputProps & { rules: RegisterOptions }) => {
  const { control } = useFormContext()
  const { t } = useTranslation()

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
          <TextInputField
            {...fieldProps}
            {...validityField}
            name={name}
            placeholder={placeholder}
            themeName={themeName}
            label={label}
            field={field}
            tokens={inputTokens}
            ariaLabel={ariaLabel}
            isDisabled={field.disabled}
            isRequired={rules?.required === true || rules?.required === 'required'}
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              field.onChange(e)
              onChange?.(e)
            }}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => {
              field.onBlur()
              onBlur?.(e)
            }}
          />
        )
      }}
    />
  )
}
export default TextInputField
