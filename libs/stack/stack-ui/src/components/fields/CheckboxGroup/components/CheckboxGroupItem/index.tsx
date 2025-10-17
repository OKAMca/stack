'use client'

import { isEmpty } from 'radashi'
import { useRef } from 'react'
import { FocusRing, VisuallyHidden, useCheckboxGroupItem } from 'react-aria'
import { Controller, useFormContext } from 'react-hook-form'
import type { RegisterOptions } from 'react-hook-form'
import type { CheckboxGroupState } from 'react-stately'
import { useCheckboxGroupCtx } from '../../../../../providers/CheckboxGroup'
import useThemeContext from '../../../../../providers/Theme/hooks'
import { useTranslation } from '../../../../../providers/Translation'
import Icon from '../../../../Icon'
import Typography from '../../../../Typography'
import type { TCheckboxGroupItemProps } from '../../interface'

const ContextCheckboxGroupItem = (props: TCheckboxGroupItemProps & { state: CheckboxGroupState }) => {
  const {
    id,
    ariaLabel,
    icon,
    state,
    themeName = 'checkbox',
    customTheme,
    tokens,
    isDisabled = false,
    isError = false,
    value,
    errorMessage,
    label,
  } = props
  const ref = useRef(null)
  const { inputProps } = useCheckboxGroupItem(props, state, ref)
  const { isSelected } = state

  const checkBoxTokens = { ...tokens, selected: isSelected(value), isDisabled, isError }
  const checkBoxContainerTheme = useThemeContext(`${themeName}.container`, checkBoxTokens, customTheme)
  const checkBoxTheme = useThemeContext(`${themeName}.checkBox`, checkBoxTokens, customTheme)
  const checkMarkTheme = useThemeContext(`${themeName}.checkMark`, checkBoxTokens, customTheme)
  const checkMarkIconTheme = useThemeContext(`${themeName}.checkMarkIcon`, checkBoxTokens, customTheme)

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <label className={checkBoxContainerTheme} htmlFor={id} aria-label={ariaLabel} aria-disabled={isDisabled}>
          <VisuallyHidden>
            <input ref={ref} {...inputProps} />
          </VisuallyHidden>
          <div className={checkBoxTheme} aria-checked={isSelected(value)} role="checkbox" aria-labelledby={id}>
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

const CheckboxGroupItem = (props: TCheckboxGroupItemProps) => {
  const state = useCheckboxGroupCtx()
  return state && <ContextCheckboxGroupItem state={state} {...props} />
}

export const ReactHookFormCheckboxItem = ({
  name,
  label,
  rules,
  tokens,
  ariaLabel,
  defaultValue = false,
  themeName = 'checkbox',
  isReadOnly = false,
  isRequired,
  onChange,
  onBlur,
  value,
  icon,
  ...rest
}: TCheckboxGroupItemProps & {
  rules?: RegisterOptions
  name: string
  defaultValue?: boolean
}) => {
  const { control } = useFormContext()
  const { t } = useTranslation()

  const getAriaFields = () => {
    const ariaFields = Object.entries(rest).filter(([key, _value]) => key.startsWith('aria-'))
    return Object.fromEntries(ariaFields)
  }

  const ruleMerged = {
    required: isRequired ? (t('FORM.ERROR.REQUIRED') ?? 'required') : false,
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

        const checkboxTokens = {
          ...tokens,
          ...validityField,
        }

        return (
          <CheckboxGroupItem
            {...fieldProps}
            {...validityField}
            {...getAriaFields()}
            id={name}
            value={value}
            icon={icon}
            themeName={themeName}
            label={label}
            tokens={checkboxTokens}
            ariaLabel={ariaLabel}
            isDisabled={field.disabled}
            isRequired={rules?.required === true || rules?.required === 'required'}
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

export default CheckboxGroupItem
