'use client'

import type { RefObject } from 'react'
import type { RegisterOptions } from 'react-hook-form'
import type { TToken } from '../../../providers/Theme/interface'
import type { TSelectProps } from './Select.interface'
import { isEmpty } from 'radashi'
import * as React from 'react'
import { useRef } from 'react'
import { HiddenSelect, useSelect } from 'react-aria'
import { Controller, useFormContext } from 'react-hook-form'
import { useSelectState } from 'react-stately'
import { useTranslation } from '../../../providers/Translation'
import { Box } from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import { Typography } from '../../Typography'
import SelectItem from '../SelectItem/SelectItem'
import { ListBox } from './components/Listbox'
import Popover from './components/Popover'

export function Select<T extends TToken>(props: TSelectProps<T>) {
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

  const inputRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)

  const mergeRefs = (ref: HTMLElement | null) => {
    if (ref != null) {
      hookFormRef?.(ref)
      inputRef.current = ref
    }
  }

  const filteredOptions = options?.filter(option => !(option.key?.includes('header-') ?? false))

  const state = useSelectState({
    ...rest,
    children: SelectItem,
    selectedKey: value,
    defaultSelectedKey: defaultValue,
    items: filteredOptions ?? [],
    onSelectionChange,
    isDisabled: disabled,
    isRequired: required,
    isInvalid,
  })

  const { triggerProps, menuProps, labelProps, valueProps } = useSelect(
    { ...rest, label, isDisabled: disabled, isRequired: required, isInvalid },
    state,
    mergeRefs as unknown as RefObject<HTMLElement | null>,
  )

  const { onPress, onPressStart, ...restofTriggerProps } = triggerProps

  return (
    <Box themeName={`${themeName}.wrapper`}>
      {label != null && (
        <Typography {...labelProps} as="label" themeName={`${themeName}.label`}>
          {label}
        </Typography>
      )}
      <HiddenSelect state={state} triggerRef={buttonRef} name={name} isDisabled />
      <Box themeName={`${themeName}.container`}>
        <ButtonWithForwardRef
          {...restofTriggerProps}
          handlePress={(event) => {
            onPress?.(event)
            onPressStart?.(event)
          }}
          ref={buttonRef}
          disabled={disabled}
          themeName={`${themeName}.button`}
          tokens={{ ...tokens, intent: isError ? 'error' : 'default' }}
        >
          <span {...valueProps}>{state.selectedItem != null ? state.selectedItem.rendered : placeholderLabel}</span>
          <Icon icon={icon ?? 'ArrowDown'} />
        </ButtonWithForwardRef>
        {state.isOpen && buttonRef.current != null && (
          <Popover
            tokens={tokens}
            state={state}
            triggerRef={buttonRef}
            placement="bottom"
            themeName={`${themeName}.popover`}
            style={{ [`--${themeName}-container-width`]: `${buttonRef.current?.offsetWidth}px` } as React.CSSProperties}
          >
            <ListBox {...menuProps} themeName={themeName} state={state} optionsWithHeaders={options ?? []} />
          </Popover>
        )}
        {isError && (
          <Typography tokens={{ ...tokens, isError }} themeName={`${themeName}.errorMessage`}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export function ReactHookFormSelect({
  id,
  name,
  label,
  rules,
  tokens,
  defaultValue,
  themeName = 'select',
  required,
  onChange,
  options,
  placeholderLabel,
  icon,
  popoverMatchesWidth,
  value,
  ...rest
}: TSelectProps & { rules?: RegisterOptions }) {
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
      defaultValue={defaultValue ?? value}
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
