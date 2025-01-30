'use client'

import { FocusRing } from '@react-aria/focus'
import { useRef } from 'react'
import { useTextField } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import useThemeContext from '../../../providers/Theme/hooks'
import { useTranslation } from '../../../providers/Translation'
import Box from '../../Box'
import Icon from '../../Icon'
import Typography from '../../Typography'
import type { TTextInputProps, TUseTextFieldInputProps } from './interface'

const TextInputField = (props: TTextInputProps) => {
  const {
    icon,
    errorIcon,
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
  const input = useThemeContext(`${themeName}.input`, inputTokens, customTheme)

  return (
    <Box>
      <FocusRing focusRingClass="has-focus-ring" within>
        <div aria-disabled={isDisabled} className={wrapper}>
          <Box themeName={`${themeName}.inputWrapper`} tokens={inputTokens} customTheme={customTheme}>
            {label && (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <Box
                as="label"
                themeName={`${themeName}.label`}
                tokens={inputTokens}
                customTheme={customTheme}
                {...labelProps}
              >
                {label}
              </Box>
            )}
            <Box themeName={`${themeName}`} tokens={inputTokens} customTheme={customTheme}>
              {children}
              <input
                {...accessibleInputProps}
                className={input}
                ref={(e) => {
                  fieldRef?.(e)
                  ref.current = e
                }}
              />
            </Box>
          </Box>
          {icon && (
            <Icon
              themeName={`${themeName}.icon`}
              tokens={inputTokens}
              customTheme={customTheme}
              icon={icon}
              aria-hidden
            />
          )}
          {errorIcon && (
            <Icon
              themeName={`${themeName}.errorIcon`}
              tokens={inputTokens}
              customTheme={customTheme}
              icon={errorIcon}
              aria-hidden
            />
          )}
        </div>
      </FocusRing>
      {errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={inputTokens} {...errorMessageProps}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}

export const ReactHookFormInput = (props: TTextInputProps) => {
  const { name, required: legacyRequired, isRequired, minLength = 0, maxLength = 99999999, validation } = props
  const { register, formState } = useFormContext()
  const error: Error = get(formState.errors, name)
  const errMsg = error?.message ?? undefined
  const { t } = useTranslation()
  const required = isRequired ?? legacyRequired

  const { ref: refCallback, ...rest } = register(name, {
    ...(required ? { required: t('FORM.ERROR.REQUIRED') ?? 'required' } : {}),
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
