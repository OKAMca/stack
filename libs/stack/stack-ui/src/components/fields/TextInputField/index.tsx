'use client'

import { FocusRing } from '@react-aria/focus'
import { useRef } from 'react'
import { useTextField } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import useThemeContext from '../../../providers/Theme/hooks'
import { useTranslation } from '../../../providers/Translation'
import Typography from '../../Typography'
import type { TTextInputProps, TUseTextFieldInputProps } from './interface'

const TextInputField = (props: TTextInputProps) => {
  const {
    label,
    isRequired = false,
    isDisabled = false,
    required,
    disabled,
    errorMessage,
    fieldRef,
    children,
    themeName = 'textInput',
    tokens,
    customTheme,
    ariaLabel,
  } = props

  const legacyRequired = required ?? isRequired
  const legacyDisabled = disabled ?? isDisabled

  const ref = useRef<HTMLInputElement | null>(null)
  // inputProps will be cast to TUseTextFieldInputProps
  // so you should only use useTextField<'input'>
  const { errorMessageProps, inputProps, labelProps } = useTextField<'input'>(
    { 'aria-label': ariaLabel, ...props, isRequired: legacyRequired, isDisabled: legacyDisabled },
    ref,
  )

  const { 'aria-labelledby': inputPropsAriaLabelledBy, ...accessibleInputProps } = {
    ...(inputProps as TUseTextFieldInputProps),
    required: legacyRequired,
    disabled: legacyDisabled,
  }

  const inputTokens = { ...tokens, isDisabled, isRequired, isError: !!errorMessage }

  const wrapper = useThemeContext(`${themeName}.wrapper`, inputTokens, customTheme)
  const labelTheme = useThemeContext(`${themeName}.label`, inputTokens, customTheme)
  const input = useThemeContext(`${themeName}.input`, inputTokens, customTheme)
  const container = useThemeContext(`${themeName}.container`, inputTokens, customTheme)

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <div aria-disabled={isDisabled} className={wrapper}>
          {label && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label className={labelTheme} {...labelProps}>
              {label}
            </label>
          )}
          <div className={container}>
            {children}

            <input
              {...accessibleInputProps}
              className={input}
              ref={(e) => {
                fieldRef?.(e)
                ref.current = e
              }}
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
  const { name, required, isRequired, minLength = 0, maxLength = 99999999, validation } = props
  const { register, formState } = useFormContext()
  const error: Error = get(formState.errors, name)
  const errMsg = error?.message ?? undefined
  const { t } = useTranslation()
  const { ref: refCallback, ...rest } = register(name, {
    required: required ?? isRequired ? t('FORM.ERROR.REQUIRED') ?? 'required' : false,
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

  return <TextInputField fieldRef={refCallback} {...rest} {...props} errorMessage={errMsg} />
}

export default TextInputField
