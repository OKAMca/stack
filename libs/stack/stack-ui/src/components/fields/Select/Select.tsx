'use client'

import { isEmpty } from 'radashi'
import { useRef } from 'react'
import { HiddenSelect, useSelect } from 'react-aria'
import type { RegisterOptions } from 'react-hook-form'
import { useFormContext, Controller } from 'react-hook-form'
import { useSelectState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import { useTranslation } from '../../../providers/Translation'
import Box from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import { PopoverContent } from '../../Popover'
import Typography from '../../Typography'
import SelectItem from '../SelectItem/SelectItem'
import { ListBox } from './components/Listbox'
import type { TSelectProps } from './Select.interface'

const Select = <T extends TToken>(props: TSelectProps<T>) => {
  const {
    name,
    placeholderLabel,
    disabled,
    required,
    isInvalid,
    hookFormRef,
    isError = false,
    errorMessage,
    themeName = 'select',
    tokens,
    customTheme,
    label,
    onSelectionChange,
    defaultValue,
    value,
    icon,
    popoverMatchesWidth,
    options,
    ...rest
  } = props
  const fieldRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)

  const state = useSelectState({
    ...rest,
    children: SelectItem,
    selectedKey: value,
    defaultSelectedKey: defaultValue,
    items: options,
    onSelectionChange,
    isDisabled: disabled,
    isRequired: required,
    isInvalid,
  })

  const { triggerProps, menuProps, labelProps } = useSelect(
    { ...rest, label, isDisabled: disabled, isRequired: required, isInvalid },
    state,
    fieldRef,
  )
  const { onPress, onPressStart, ...restofTriggerProps } = triggerProps

  const selectTokens = {
    ...tokens,
    isOpen: state.isOpen,
    isInvalid: !!isInvalid,
    isError: !!isError,
    isDisabled: !!disabled,
    isRequired: !!required,
  }

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={selectTokens}>
      {label && (
        <Typography {...labelProps} as="label" themeName={`${themeName}.label`} tokens={selectTokens}>
          {label}
        </Typography>
      )}
      <HiddenSelect {...hookFormRef} state={state} triggerRef={fieldRef} name={name} isDisabled />
      <Box themeName={`${themeName}.container`} tokens={selectTokens}>
        <ButtonWithForwardRef
          {...restofTriggerProps}
          handlePress={(event) => {
            onPress?.(event)
            onPressStart?.(event)
          }}
          ref={fieldRef}
          disabled={disabled}
          themeName={`${themeName}.button`}
          tokens={selectTokens}
        >
          {state.selectedItem ? state.selectedItem.rendered : placeholderLabel}
          <Icon icon={icon ?? 'ArrowDown'} tokens={selectTokens} />
        </ButtonWithForwardRef>
        {state.isOpen && fieldRef.current && (
          <PopoverContent
            tokens={selectTokens}
            triggerRef={fieldRef}
            placement="bottom"
            themeName={`${themeName}.popover`}
            state={state}
          >
            <ListBox {...menuProps} themeName={themeName} tokens={selectTokens} state={state} />
          </PopoverContent>
        )}
        {isError && (
          <Typography tokens={selectTokens} themeName={`${themeName}.errorMessage`}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export const ReactHookFormSelect = ({
  id,
  name,
  label,
  rules,
  tokens,
  defaultValue,
  value,
  themeName = 'select',
  required,
  onChange,
  options,
  placeholderLabel,
  icon,
  popoverMatchesWidth,
  ...rest
}: TSelectProps & { rules?: RegisterOptions }) => {
  const { control } = useFormContext()
  const { t } = useTranslation()

  const getAriaFields = () => {
    const ariaFields = Object.entries(rest).filter(([key, _value]) => key.startsWith('aria-'))
    return Object.fromEntries(ariaFields)
  }

  const ruleMerged = {
    required: required ? (t('FORM.ERROR.REQUIRED') ?? 'required') : false,
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
        }

        const selectTokens = {
          ...tokens,
          ...validityField,
        }

        return (
          <Select
            {...fieldProps}
            {...validityField}
            {...getAriaFields()}
            id={id}
            hookFormRef={ref}
            name={name}
            themeName={themeName}
            label={label}
            tokens={selectTokens}
            disabled={field.disabled}
            required={rules?.required === true || rules?.required === 'required'}
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
            value={field.value}
            options={options}
            placeholderLabel={placeholderLabel}
            icon={icon}
            popoverMatchesWidth={popoverMatchesWidth}
            onSelectionChange={(key) => {
              field.onChange(key)
              onChange?.(key)
            }}
          />
        )
      }}
    />
  )
}

export default Select
