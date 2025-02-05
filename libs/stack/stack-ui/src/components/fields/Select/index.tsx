'use client'

import { isEmpty } from 'radashi'
import React, { useRef } from 'react'
import { HiddenSelect, useSelect } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import { Item, useSelectState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import Box from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import Typography from '../../Typography'
import ErrorMessage from '../ErrorMessage'
import { ListBox } from './components/Listbox'
import Popover from './components/Popover'
import type { TSelectItemProps, TSelectProps } from './interface'

const Select = <T extends TToken>(props: TSelectProps<T>) => {
  const { isError, defaultValue, disabled, placeholderLabel, value, options, required } = props
  const {
    name,
    hookFormRef,
    errorMessage,
    themeName = 'select',
    tokens,
    customTheme,
    label,
    icon,
    popoverMatchesWidth,
    items = options,
    selectedKey = value,
    isInvalid: propIsInvalid = isError,
    isDisabled = disabled,
    isRequired = required,
    placeholder = placeholderLabel,
    defaultSelectedKey = defaultValue,
    children = ({ key, ...itemProps }: TSelectItemProps<T>) => <Item {...itemProps} key={key} />,
    ...rest
  } = props

  const selectProps = {
    items,
    isInvalid: propIsInvalid,
    isDisabled,
    placeholder,
    defaultSelectedKey,
    selectedKey,
    label,
    children,
    isRequired,
    ...rest,
  }

  const fieldRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)

  const state = useSelectState(selectProps)
  const { triggerProps, menuProps, labelProps, errorMessageProps, validationErrors, isInvalid } = useSelect(
    selectProps,
    state,
    fieldRef,
  )
  const selectTokens = {
    ...tokens,
    isOpen: state.isOpen,
    isInvalid,
    isError: isInvalid,
    isDisabled: !!isDisabled,
    isRequired: !!isRequired,
  }
  const { onPress, onPressStart, ...restofTriggerProps } = triggerProps

  return (
    <Box themeName={`${themeName}.wrapper`}>
      {label && (
        <Typography {...labelProps} as="label" themeName={`${themeName}.label`} tokens={selectTokens}>
          {label}
        </Typography>
      )}
      <HiddenSelect {...hookFormRef} state={state} triggerRef={fieldRef} name={name} isDisabled />
      <Box themeName={`${themeName}.container`}>
        <ButtonWithForwardRef
          {...restofTriggerProps}
          handlePress={(event) => {
            onPress?.(event)
            onPressStart?.(event)
          }}
          ref={fieldRef}
          disabled={disabled}
          themeName={`${themeName}.button`}
          tokens={{ ...selectTokens, intent: isInvalid ? 'error' : 'default' }}
        >
          {state.selectedItem ? state.selectedItem.rendered : placeholder}
          <Icon icon={icon ?? 'ArrowDown'} />
        </ButtonWithForwardRef>
        {state.isOpen && fieldRef.current && (
          <Popover
            tokens={selectTokens}
            state={state}
            triggerRef={fieldRef}
            placement="bottom"
            themeName={`${themeName}.popover`}
            style={{ [`--${themeName}-container-width`]: `${fieldRef.current?.offsetWidth}px` } as React.CSSProperties}
          >
            <ListBox {...menuProps} themeName={themeName} tokens={selectTokens} state={state} />
          </Popover>
        )}
        {isInvalid && (
          <ErrorMessage
            themeName={`${themeName}.errorMessage`}
            tokens={selectTokens}
            {...errorMessageProps}
            validationErrors={validationErrors}
          >
            {errorMessage}
          </ErrorMessage>
        )}
      </Box>
    </Box>
  )
}

export const ReactHookFormSelect = (props: TSelectProps) => {
  const { required } = props
  const { name, isRequired = required } = props
  const { register, formState } = useFormContext()
  const errors = get(formState.errors, name)
  const errMsg = errors?.message ?? undefined
  const { ref } = register(name, {
    required: isRequired ? 'This is an error message' : false,
  })

  return <Select {...props} isError={!isEmpty(errMsg)} errorMessage={errMsg} hookFormRef={ref} />
}

export default Select
