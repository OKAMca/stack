'use client'

import { FocusRing } from '@react-aria/focus'
import { isEmpty } from 'lodash'
import { useRef } from 'react'
import { useTextField } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import useThemeContext from '../../../providers/Theme/hooks'
import Typography from '../../Typography'
import type { TTextInputProps, TUseTextFieldInputProps } from './interface'

const TextInputField = (props: TTextInputProps) => {
  const {
    id,
    label,
    required,
    disabled = false,
    errorMessage,
    ariaLabel,
    value,
    onBlur,
    onChange,
    fieldRef,
    type = 'text',
    children,
    themeName = 'textInput',
    tokens,
    customTheme,
  } = props
  const ref = useRef<HTMLInputElement | null>(null)
  // inputProps will be cast to TUseTextFieldInputProps
  // so you should only use useTextField<'input'>
  const { errorMessageProps, inputProps, labelProps } = useTextField<'input'>(props, ref)

  const inputTokens = { ...tokens, isDisabled: disabled, isError: errorMessage != null }

  const wrapper = useThemeContext(`${themeName}.wrapper`, inputTokens, customTheme)
  const labelTheme = useThemeContext(`${themeName}.label`, inputTokens, customTheme)
  const input = useThemeContext(`${themeName}.input`, inputTokens, customTheme)
  const container = useThemeContext(`${themeName}.container`, inputTokens, customTheme)

  console.log(useThemeContext(`${themeName}.errorMessage`, inputTokens, customTheme))

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <div aria-disabled={disabled} className={wrapper}>
          {label && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label className={labelTheme} {...labelProps}>
              {label}
            </label>
          )}
          <div className={container}>
            {children}

            <input
              {...(inputProps as TUseTextFieldInputProps)}
              className={input}
              disabled={disabled}
              required={required}
              ref={(e) => {
                fieldRef?.(e)
                ref.current = e
              }}
              aria-label={ariaLabel}
              aria-labelledby={id}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              type={type}
            />
          </div>
        </div>
      </FocusRing>
      {errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={inputTokens} {...errorMessageProps}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export const ReactHookFormInput = (props: TTextInputProps) => {
  const { name, required, minLength = 0, maxLength = 99999999, validation } = props
  const { register, formState } = useFormContext()
  const error: Error = get(formState.errors, name)
  const errMsg = error?.message ?? undefined
  const { t } = useTranslation('components')
  const { ref: refCallback, ...rest } = register(name, {
    required: required ? t('FORM.ERROR.REQUIRED') ?? 'required' : false,
    minLength: {
      value: minLength,
      message: t('FORM.ERROR.MIN_LENGTH', { length: minLength }),
    },
    maxLength: {
      value: maxLength,
      message: t('FORM.ERROR.MAX_LENGTH', { length: minLength }),
    },
    ...validation,
  })

  return <TextInputField fieldRef={refCallback} {...rest} {...props} isError={!isEmpty(errMsg)} errorMessage={errMsg} />
}

export default TextInputField
