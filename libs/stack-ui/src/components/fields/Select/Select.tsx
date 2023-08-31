'use client'

import { isEmpty } from 'lodash'
import { useRef } from 'react'
import { HiddenSelect, useSelect } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import { useSelectState } from 'react-stately'
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
    ...rest
  } = props
  const fieldRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)

  const state = useSelectState({
    ...rest,
    selectedKey: value,
    defaultSelectedKey: defaultValue,
    onSelectionChange,
  })

  const { triggerProps, menuProps, labelProps } = useSelect({ ...rest }, state, fieldRef)

  const wrapper = useThemeContext(`${themeName}.wrapper`, tokens, customTheme)
  const container = useThemeContext(`${themeName}.container`, tokens, customTheme)

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
          {...triggerProps}
          ref={fieldRef}
          disabled={disabled}
          themeName={`${themeName}.button`}
          tokens={{ ...tokens, intent: isError ? 'error' : 'default' }}
        >
          {state.selectedItem ? state.selectedItem.rendered : placeholderLabel}
          <Icon icon="ArrowDown" />
        </ButtonWithForwardRef>
        {state.isOpen && fieldRef.current && (
          <Popover
            state={state}
            tokens={{ width: `${fieldRef.current?.offsetWidth}` }}
            triggerRef={fieldRef}
            placement="bottom"
            themeName={`${themeName}.popover`}
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
