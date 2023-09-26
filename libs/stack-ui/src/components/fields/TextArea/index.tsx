/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import { FocusRing } from '@react-aria/focus'
import React, { useRef } from 'react'
import { useTextField } from 'react-aria'
import useThemeContext from '../../../providers/Theme/hooks'
import Typography from '../../Typography'
import type { TTextAreaProps } from './interface'

const TextArea = (props: TTextAreaProps) => {
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
  const { errorMessageProps, inputProps, labelProps } = useTextField<'input'>(props, ref)

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
              {...(inputProps as object)}
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

export default TextArea
