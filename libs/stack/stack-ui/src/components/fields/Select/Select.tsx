'use client'

import { isEmpty } from 'lodash'
import React, { useRef } from 'react'
import { HiddenSelect, useSelect } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import { Item, useSelectState } from 'react-stately'
import useThemeContext from '../../../providers/Theme/hooks'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import Typography from '../../Typography'
import { ListBox } from './components/Listbox'
import Popover from './components/Popover'
import type { TSelectProps } from './Select.interface'

const Select = (props: TSelectProps) => {
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
    ...rest
  } = props
  const fieldRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)

  const children = React.Children.map(props?.children, (child) => <Item key={child.key}>{child.props.children}</Item>)

  const state = useSelectState({
    ...rest,
    children,
    selectedKey: value,
    defaultSelectedKey: defaultValue,
    onSelectionChange,
  })

  const { triggerProps, menuProps, labelProps } = useSelect({ ...rest }, state, fieldRef)

  const wrapper = useThemeContext(`${themeName}.wrapper`, tokens, customTheme)
  const container = useThemeContext(`${themeName}.container`, tokens, customTheme)
  const { onPress, onPressStart, ...restofTriggerProps } = triggerProps

  return (
    <div className={wrapper}>
      {label && (
        <Typography {...labelProps} as="label" themeName={`${themeName}.label`}>
          {label}
        </Typography>
      )}
      <HiddenSelect {...hookFormRef} state={state} triggerRef={fieldRef} name={name} isDisabled />
      <div className={container}>
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
      </div>
    </div>
  )
}

export const ReactHookFormSelect = (props: TSelectProps) => {
  const { name, required, children } = props
  const { register, formState } = useFormContext()
  const errors = get(formState.errors, name)
  const errMsg = errors?.message ?? undefined
  const { ref } = register(name, {
    required: required ? 'This is an error message' : false,
  })

  return (
    <Select {...props} isError={!isEmpty(errMsg)} errorMessage={errMsg} hookFormRef={ref}>
      {children}
    </Select>
  )
}

export default Select
