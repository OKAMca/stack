'use client'

import { isEmpty } from 'radashi'
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { useComboBox, useFilter } from 'react-aria'
import type { RegisterOptions } from 'react-hook-form'
import { useFormContext, Controller } from 'react-hook-form'
import { useComboBoxState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import { useTranslation } from '../../../providers/Translation'
import Box, { BoxWithForwardRef } from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import Typography from '../../Typography'
import SelectItem from '../SelectItem/SelectItem'
import type { TComboBoxProps } from './ComboBox.interface'
import { ListBox } from './components/Listbox'
import Popover from './components/Popover'

// Custom hook for debounced input
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

const ComboBox = <T extends TToken>(props: TComboBoxProps<T>) => {
  const {
    name,
    placeholder,
    disabled,
    required,
    isInvalid,
    hookFormRef,
    isError = false,
    errorMessage,
    themeName = 'comboBox',
    tokens,
    customTheme,
    label,
    onSelectionChange,
    onInputChange,
    defaultValue,
    value,
    inputValue,
    defaultInputValue,
    icon,
    options,
    allowsCustomValue = false,
    menuTrigger = 'input',
    defaultFilter,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const inputWrapperRef = useRef<HTMLDivElement>(null)

  // Local state for input value to enable debouncing
  const [localInputValue, setLocalInputValue] = useState(inputValue || defaultInputValue || '')

  // Debounced input value for filtering (300ms delay)
  const debouncedInputValue = useDebounce(localInputValue, 300)

  // Use the default "contains" filter if no custom filter is provided
  const { contains } = useFilter({ sensitivity: 'base' })
  const filterFunction = defaultFilter || contains

  // Convert options to the format expected by useComboBoxState
  const comboBoxItems = useMemo(
    () =>
      options?.map((option) => ({
        key: option.key,
        name: option.value,
        value: option.value,
      })) || [],
    [options],
  )

  // Filter items based on debounced input for better performance
  const filteredItems = useMemo(() => {
    const baseItems = comboBoxItems?.filter((option) => !option.key?.includes('header-'))
    if (!debouncedInputValue || debouncedInputValue.length === 0) {
      return baseItems
    }
    return baseItems?.filter((item) => filterFunction(item.value.toLowerCase(), debouncedInputValue.toLowerCase()))
  }, [comboBoxItems, debouncedInputValue, filterFunction])

  const state = useComboBoxState({
    ...rest,
    children: SelectItem,
    selectedKey: value,
    defaultSelectedKey: defaultValue,
    inputValue: localInputValue,
    defaultInputValue,
    items: filteredItems,
    onSelectionChange: (key) => {
      onSelectionChange?.(key as string)
    },
    onInputChange: (newInputValue) => {
      setLocalInputValue(newInputValue)
      onInputChange?.(newInputValue)
    },
    isDisabled: disabled,
    isRequired: required,
    isInvalid,
    allowsCustomValue,
    menuTrigger,
    defaultFilter: filterFunction,
  })

  const { inputProps, listBoxProps, labelProps, buttonProps } = useComboBox(
    {
      ...rest,
      label,
      isDisabled: disabled,
      isRequired: required,
      isInvalid,
      allowsCustomValue,
      menuTrigger,
      inputRef,
      popoverRef,
      listBoxRef: useRef(null),
    },
    state,
  )

  const { onPress, ...restOfButtonProps } = buttonProps

  const hasValue = state.inputValue && state.inputValue.length > 0
  const hasSelectedItem = state.selectedItem !== null

  const handleInputRef = useCallback(
    (ref: HTMLInputElement | null) => {
      if (ref) {
        hookFormRef?.(ref)
        ;(inputRef as React.MutableRefObject<HTMLInputElement | null>).current = ref
      }
    },
    [hookFormRef],
  )

  // Handle clear button click
  const handleClearClick = useCallback(() => {
    setLocalInputValue('')
    state.setInputValue('')
    state.selectionManager.clearSelection()
    onInputChange?.('')
    onSelectionChange?.(null)
    inputRef.current?.focus()
  }, [state, onInputChange, onSelectionChange])

  // Calculate display value for the input with ellipsis support
  const displayValue = useMemo(() => {
    if (state.selectedItem && !state.isOpen) {
      return state.selectedItem.rendered as string
    }
    return state.inputValue
  }, [state.selectedItem, state.inputValue, state.isOpen])

  return (
    <Box themeName={`${themeName}.wrapper`}>
      {label && (
        <Typography {...labelProps} as="label" themeName={`${themeName}.label`}>
          {label}
        </Typography>
      )}
      <Box themeName={`${themeName}.container`}>
        <BoxWithForwardRef
          ref={inputWrapperRef}
          themeName={`${themeName}.inputWrapper`}
          tokens={{ hasValue, hasSelectedItem, ...tokens }}
        >
          <input
            {...inputProps}
            ref={handleInputRef}
            disabled={disabled}
            placeholder={placeholder}
            name={name}
            value={displayValue}
          />
          <ButtonWithForwardRef
            {...restOfButtonProps}
            ref={buttonRef}
            disabled={disabled}
            themeName={`${themeName}.button`}
            tokens={{
              ...tokens,
              intent: isError ? 'error' : 'default',
              hasValue,
              hasSelectedItem,
            }}
            handlePress={hasValue ? handleClearClick : onPress}
            aria-label={hasValue ? 'Clear selection' : 'Open dropdown'}
          >
            {hasValue ? <Icon icon="CloseBtn" /> : <Icon icon={icon ?? 'ArrowDown'} />}
          </ButtonWithForwardRef>
        </BoxWithForwardRef>
        {state.isOpen && inputWrapperRef.current && (
          <Popover
            tokens={tokens}
            state={state}
            triggerRef={inputWrapperRef}
            placement="bottom"
            themeName={`${themeName}.popover`}
            style={
              { [`--${themeName}-container-width`]: `${inputWrapperRef.current?.offsetWidth}px` } as React.CSSProperties
            }
          >
            {filteredItems.length === 0 ? (
              <Box themeName={`${themeName}.noResults`}>
                <Typography themeName={`${themeName}.noResultsText`}>
                  {allowsCustomValue ? 'Type to add custom value' : 'No results found'}
                </Typography>
              </Box>
            ) : (
              <ListBox {...listBoxProps} themeName={themeName} state={state} optionsWithHeaders={options ?? []} />
            )}
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

export const ReactHookFormComboBox = ({
  id,
  name,
  label,
  rules,
  tokens,
  defaultValue,
  themeName = 'comboBox',
  required,
  onChange,
  onInputChange,
  options,
  placeholder,
  icon,
  value,
  inputValue,
  defaultInputValue,
  allowsCustomValue,
  menuTrigger,
  ...rest
}: TComboBoxProps & { rules?: RegisterOptions }) => {
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

        const comboBoxTokens = {
          ...tokens,
          ...validityField,
        }

        return (
          <ComboBox
            {...fieldProps}
            {...validityField}
            {...getAriaFields()}
            id={id}
            hookFormRef={ref}
            name={name}
            themeName={themeName}
            label={label}
            tokens={comboBoxTokens}
            disabled={field.disabled}
            required={rules?.required === true || rules?.required === 'required'}
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
            value={field.value}
            inputValue={inputValue}
            defaultInputValue={defaultInputValue}
            options={options}
            placeholder={placeholder}
            icon={icon}
            allowsCustomValue={allowsCustomValue}
            menuTrigger={menuTrigger}
            onSelectionChange={(key) => {
              field.onChange(key)
              onChange?.(key)
            }}
            onInputChange={(val) => {
              onInputChange?.(val)
            }}
          />
        )
      }}
    />
  )
}

export default ComboBox
