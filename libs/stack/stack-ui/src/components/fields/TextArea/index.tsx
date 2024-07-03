/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import { FocusRing } from '@react-aria/focus'
import { isEmpty } from 'radash'
import React, { useRef } from 'react'
import { useTextField } from 'react-aria'
import { useFormContext, get } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import useThemeContext from '../../../providers/Theme/hooks'
import Typography from '../../Typography'
import type { TTextInputProps } from '../TextInputField/interface'

const TextArea = (props: TTextInputProps) => {
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
      <div className={wrapper} aria-disabled={disabled}>
        {label && (
          <label className={labelTheme} {...labelProps}>
            {label}
          </label>
        )}
        <div className={container}>
          <FocusRing focusRingClass="has-focus-ring">
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
          </FocusRing>
        </div>
      </div>
      {errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={inputTokens} {...errorMessageProps}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export const ReactHookFormTextArea = (props: TTextInputProps) => {
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

  return <TextArea fieldRef={refCallback} {...rest} {...props} isError={!isEmpty(errMsg)} errorMessage={errMsg} />
}

export default TextArea
