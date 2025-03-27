'use client'

import { useCheckbox } from '@react-aria/checkbox'
import { FocusRing, useFocusRing } from '@react-aria/focus'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useToggleState } from '@react-stately/toggle'
import { isEmpty } from 'radashi'
import { useRef } from 'react'
import type { RegisterOptions } from 'react-hook-form'
import { Controller, useFormContext } from 'react-hook-form'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TToken } from '../../../providers/Theme/interface'
import { useTranslation } from '../../../providers/Translation'
import Icon from '../../Icon'
import Typography from '../../Typography'
import type { TCheckboxProps } from './Checkbox.interface'

const Checkbox = <T extends TToken>(props: TCheckboxProps<T>) => {
  const {
    id,
    label,
    isDisabled = false,
    isError = false,
    errorMessage,
    ariaLabel,
    icon,
    themeName = 'checkbox',
    tokens,
    customTheme,
  } = props
  const state = useToggleState(props)
  const ref = useRef<HTMLInputElement | null>(null)
  const { inputProps } = useCheckbox(props, state, ref)
  const { isSelected } = state
  const { focusProps, isFocusVisible } = useFocusRing()

  const checkBoxTokens = { ...tokens, selected: isSelected, isDisabled, isError, isFocusVisible }
  const checkBoxContainerTheme = useThemeContext(`${themeName}.container`, checkBoxTokens, customTheme)
  const checkBoxTheme = useThemeContext(`${themeName}.checkBox`, checkBoxTokens, customTheme)
  const checkMarkTheme = useThemeContext(`${themeName}.checkMark`, checkBoxTokens, customTheme)
  const checkMarkIconTheme = useThemeContext(`${themeName}.checkMarkIcon`, checkBoxTokens, customTheme)

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <label className={checkBoxContainerTheme} htmlFor={id} aria-label={ariaLabel} aria-disabled={isDisabled}>
          <VisuallyHidden>
            <input type="checkbox" ref={ref} aria-labelledby={id} {...inputProps} {...focusProps} />
          </VisuallyHidden>
          <div className={checkBoxTheme} aria-checked={isSelected} role="checkbox" aria-labelledby={id}>
            <div className={checkMarkTheme}>{icon && <Icon icon={icon} customTheme={checkMarkIconTheme} />}</div>
          </div>
          <Typography themeName={`${themeName}.label`} tokens={checkBoxTokens}>
            {label}
          </Typography>
        </label>
      </FocusRing>
      {isError && errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={checkBoxTokens}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export default Checkbox

export const ReactHookFormCheckBox = ({
  name,
  label,
  rules,
  tokens,
  ariaLabel,
  defaultValue = false,
  themeName = 'checkbox',
  isDisabled = false,
  icon,
  onChange,
  onBlur,
  ...rest
}: TCheckboxProps<TToken> & { rules: RegisterOptions; name: string; defaultValue: boolean }) => {
  const { control } = useFormContext()
  const { t } = useTranslation()

  const getAriaFields = () => {
    const ariaFields = Object.entries(rest).filter(([key, _value]) => key.startsWith('aria-'))
    return Object.fromEntries(ariaFields)
  }

  const ruleMerged = {
    required: rules?.required ? (t('FORM.ERROR.REQUIRED') ?? 'required') : false,
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
        const { ref, value, ...fieldProps } = field
        const isError = !isEmpty(fieldState.error)

        const validityField = {
          isDisabled: field.disabled ?? isDisabled,
          isRequired: rules?.required === true || rules?.required === 'required',
          isError,
        }

        const checkboxTokens = {
          ...tokens,
          ...validityField,
        }

        return (
          <Checkbox
            {...fieldProps}
            {...validityField}
            {...getAriaFields()}
            id={name}
            isSelected={value}
            name={name}
            themeName={themeName}
            label={label}
            tokens={checkboxTokens}
            ariaLabel={ariaLabel}
            icon={icon}
            errorMessage={fieldState.error?.message}
            onChange={(e) => {
              field.onChange(e)
              onChange?.(e)
            }}
            onBlur={(e) => {
              field.onBlur()
              onBlur?.(e)
            }}
          />
        )
      }}
    />
  )
}
