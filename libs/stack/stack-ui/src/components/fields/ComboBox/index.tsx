'use client'

import type { PressEvent } from '@react-types/shared'
import { isEmpty } from 'radashi'
import React, { useRef, useCallback, useMemo } from 'react'
import { useComboBox, useFilter } from 'react-aria'
import type { RegisterOptions } from 'react-hook-form'
import { useFormContext, Controller } from 'react-hook-form'
import { useComboBoxState } from 'react-stately'
import { useDebounce } from '../../../hooks/useDebounce'
import type { TToken } from '../../../providers/Theme/interface'
import { useTranslation } from '../../../providers/Translation'
import Box, { BoxWithForwardRef } from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import ArrowDown from '../../icons/ArrowDown'
import CloseBtn from '../../icons/CloseBtn'
import Popover from '../../Popover'
import Typography from '../../Typography'
import { ControlledListBox } from '../ListBox'
import type { TComboBoxProps } from './interface'

const ComboBox = (props: TComboBoxProps<object, TToken>) => {
  const {
    children,
    hookFormRef,
    errorMessage,
    themeName = 'comboBox',
    tokens,
    customTheme,
    label,
    icon = <ArrowDown />,
    closeIcon = <CloseBtn />,
    isDisabled = false,
    isRequired = false,
    isReadOnly = false,
    defaultFilter: defaultFilterProp,
    inputRef: inputRefProp,
    buttonRef: buttonRefProp,
    popoverRef: popoverRefProp,
    listBoxRef: listBoxRefProp,
    debounceDelay = 200,
  } = props

  const innerInputRef = useRef<HTMLInputElement>(null)
  const inputRef = inputRefProp ?? innerInputRef

  const innerButtonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const buttonRef = buttonRefProp ?? innerButtonRef

  const innerPopoverRef = useRef<HTMLDivElement>(null)
  const popoverRef = popoverRefProp ?? innerPopoverRef

  const innerListBoxRef = useRef<HTMLDivElement>(null)
  const listBoxRef = listBoxRefProp ?? innerListBoxRef

  const inputWrapperRef = useRef<HTMLDivElement>(null)

  const { contains } = useFilter({ sensitivity: 'base' })
  const defaultFilter = defaultFilterProp ?? contains
  const state = useComboBoxState({ ...props, defaultFilter })

  const { inputProps, listBoxProps, labelProps, buttonProps, errorMessageProps, isInvalid } = useComboBox(
    { ...props, inputRef, buttonRef, popoverRef, listBoxRef },
    state,
  )

  // Only debounce the collection to avoid infinite re-renders
  const debouncedCollection = useDebounce(state.collection, debounceDelay)

  // Create a debounced state object that keeps all state properties but uses debounced collection
  const debouncedState = useMemo(
    () => ({
      ...state,
      collection: debouncedCollection,
    }),
    [state, debouncedCollection],
  )

  const { onPress, onPressStart, preventFocusOnPress, ...restOfButtonProps } = buttonProps

  const { isOpen, selectedItem, selectionManager } = state
  const { isFocused, isSelectAll, isEmpty: isEmptySelection } = selectionManager
  const hasValue = !isEmpty(state.inputValue)
  const hasSelectedItem = !isEmptySelection

  const comboBoxTokens = {
    ...tokens,
    isInvalid,
    isOpen,
    isFocused,
    hasValue,
    hasSelectedItem,
    isSelectAll,
    isReadOnly,
    isDisabled,
    isRequired,
  }

  const handleButtonPress = useCallback(
    (e: PressEvent) => {
      if (hasValue) {
        // Clear functionality: clear both input value and selection
        state.setInputValue('')
        state.selectionManager.clearSelection()
        // Focus back to the input after clearing
        if (inputRef.current) {
          inputRef.current.focus()
        }
      } else {
        // Default dropdown toggle functionality - call both handlers like Select does
        onPress?.(e)
        onPressStart?.(e)
      }
    },
    [hasValue, state, onPress, onPressStart, inputRef],
  )

  const handleInputRef = useCallback(
    (ref: HTMLInputElement | null) => {
      if (ref) {
        hookFormRef?.(ref)
        ;(inputRef as React.MutableRefObject<HTMLInputElement | null>).current = ref
      }
    },
    [hookFormRef, inputRef],
  )

  const displayValue = useMemo(() => {
    if (selectedItem && !isOpen) {
      return selectedItem.rendered as string
    }
    return state.inputValue
  }, [selectedItem, state.inputValue, isOpen])

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={comboBoxTokens} customTheme={customTheme}>
      {label && (
        <Typography {...labelProps} as="label" themeName={`${themeName}.label`} tokens={comboBoxTokens}>
          {label}
        </Typography>
      )}
      <Box themeName={`${themeName}.container`}>
        <BoxWithForwardRef ref={inputWrapperRef} themeName={`${themeName}.inputWrapper`} tokens={comboBoxTokens}>
          <input {...inputProps} ref={handleInputRef} value={displayValue} />
          <ButtonWithForwardRef
            themeName={`${themeName}.button`}
            tokens={comboBoxTokens}
            {...restOfButtonProps}
            ref={buttonRef}
            handlePress={handleButtonPress}
          >
            <Icon themeName={`${themeName}.icon`} tokens={comboBoxTokens} icon={hasValue ? closeIcon : icon} />
          </ButtonWithForwardRef>
        </BoxWithForwardRef>
        {isOpen && inputWrapperRef.current && debouncedState.collection.size > 0 && (
          <Popover
            themeName={`${themeName}.popover`}
            tokens={comboBoxTokens}
            state={state}
            triggerRef={inputWrapperRef}
            placement="bottom"
            sizeRef={inputWrapperRef}
            popoverRef={popoverRef}
            autoFocus={false}
          >
            <ControlledListBox
              {...listBoxProps}
              themeName={`${themeName}.list`}
              tokens={comboBoxTokens}
              state={debouncedState}
              ref={listBoxRef}
            >
              {children}
            </ControlledListBox>
          </Popover>
        )}
        {isInvalid && errorMessage && (
          <Typography tokens={comboBoxTokens} themeName={`${themeName}.errorMessage`} {...errorMessageProps}>
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
  themeName = 'comboBox',
  isRequired,
  onChange,
  onInputChange,
  items,
  placeholder,
  icon,
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
    required: isRequired ? (t('FORM.ERROR.REQUIRED') ?? 'required') : false,
    ...rules,
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={ruleMerged}
      disabled={rules?.disabled}
      defaultValue={defaultInputValue}
      render={({ field, fieldState }) => {
        const { ref, ...fieldProps } = field
        const isError = !isEmpty(fieldState.error)

        const validityField = {
          isDisabled: field.disabled ?? false,
          isRequired: isRequired || Boolean(rules?.required),
          isInvalid: fieldState.invalid,
          isError,
        }

        const baseTokens = {
          ...tokens,
          isDisabled: field.disabled ?? false,
          isRequired: isRequired || Boolean(rules?.required),
        }

        return (
          <ComboBox
            {...fieldProps}
            {...validityField}
            {...getAriaFields()}
            {...rest}
            id={id}
            hookFormRef={ref}
            name={name}
            themeName={themeName}
            label={label}
            tokens={baseTokens}
            isDisabled={field.disabled}
            isRequired={isRequired || Boolean(rules?.required)}
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
            defaultInputValue={defaultInputValue}
            items={items}
            placeholder={placeholder}
            icon={icon}
            allowsCustomValue={allowsCustomValue}
            menuTrigger={menuTrigger}
            selectedKey={field.value}
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
