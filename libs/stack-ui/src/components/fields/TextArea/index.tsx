import { FocusRing } from '@react-aria/focus'
import React, { useRef } from 'react'
import useThemeContext from '../../../providers/Theme/hooks'
import Typography from '../../Typography'
import type { TTextAreaProps } from './interface'

const TextArea = (props: TTextAreaProps) => {
  const {
    id,
    name,
    placeholder,
    required,
    disabled = false,
    errorMessage,
    isError = false,
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

  const container = useThemeContext(`${themeName}.container`, tokens, customTheme)
  const input = useThemeContext(`${themeName}.input`, { ...tokens, disabled, isError }, customTheme)

  return (
    <div className={container}>
      <FocusRing focusRingClass="focus-ring">
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
        />
      </FocusRing>
      {isError && errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={{ ...tokens, disabled, isError }}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export default TextArea
