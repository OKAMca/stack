'use client'

import { isEmpty } from 'lodash'
import React, { useRef } from 'react'
import { HiddenSelect, useSelect } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import { useSelectState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import Box from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import Typography from '../../Typography'
import SelectItem from '../SelectItem/SelectItem'
import { ListBox } from './components/Listbox'
import Popover from './components/Popover'
import type { TSelectProps } from './Select.interface'

const Select = <T extends TToken>(props: TSelectProps<T>) => {
  const {
    name,
    placeholderLabel,
    disabled,
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
  })

  const { triggerProps, menuProps, labelProps } = useSelect({ ...rest, label }, state, fieldRef)
  const { onPress, onPressStart, ...restofTriggerProps } = triggerProps

  return (
    <Box themeName={`${themeName}.wrapper`}>
      {label && (
        <Typography {...labelProps} as="label" themeName={`${themeName}.label`}>
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
          tokens={{ ...tokens, intent: isError ? 'error' : 'default' }}
        >
          {state.selectedItem ? state.selectedItem.rendered : placeholderLabel}
          <Icon icon={icon ?? 'ArrowDown'} />
        </ButtonWithForwardRef>
        {state.isOpen && fieldRef.current && (
          <Popover
            tokens={tokens}
            state={state}
            triggerRef={fieldRef}
            placement="bottom"
            themeName={`${themeName}.popover`}
            style={{ [`--${themeName}-container-width`]: `${fieldRef.current?.offsetWidth}px` } as React.CSSProperties}
          >
            <ListBox {...menuProps} themeName={themeName} state={state} />
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

export const ReactHookFormSelect = (props: TSelectProps) => {
  const { name, required } = props
  const { register, formState } = useFormContext()
  const errors = get(formState.errors, name)
  const errMsg = errors?.message ?? undefined
  const { ref } = register(name, {
    required: required ? 'This is an error message' : false,
  })

  return <Select {...props} isError={!isEmpty(errMsg)} errorMessage={errMsg} hookFormRef={ref} />
}

export default Select
