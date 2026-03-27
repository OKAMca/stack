'use client'

import type { ElementType, RefObject } from 'react'
import type { Selection } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import type {
  TControlledListBoxFormProps,
  TControlledReactHookFormListBoxProps,
  TListBoxFormProps,
  TReactHookFormListBoxProps,
} from './interface'
import { isEmpty } from 'radashi'
import { useRef } from 'react'
import { mergeProps, useListBox } from 'react-aria'
import { Controller, useFormContext } from 'react-hook-form'
import { useListState } from 'react-stately'
import { useTranslation } from '../../../providers/Translation'
import { Box, BoxWithForwardRef } from '../../Box'
import { Anchor } from '../../Button'
import { Typography } from '../../Typography'
import Option from '../Option'
import ListBoxSection from './components/ListBoxSection'

const itemComponents: Record<string, ElementType> = {
  item: Option,
  section: ListBoxSection,
}

export function ControlledListBox({ ref: listBoxRef, ...props }: TControlledListBoxFormProps<object, TToken> & { ref?: React.Ref<HTMLElement | null> }) {
  const {
    state,
    themeName = 'listBox',
    tokens,
    customTheme,
    label,
    escapeKeyBehavior = 'clearSelection',
    linkElementType = Anchor,
    isDisabled = false,
    isRequired = false,
    isInvalid = false,
    isError = false,
    errorMessage,
    disabledKeys,
    fieldRef,
    ...rest
  } = props
  const keys = state.collection.getKeys()
  const mergeRefs = (newRef: HTMLElement | null) => {
    if (newRef != null) {
      fieldRef?.(newRef)
      if (listBoxRef == null)
        return
      if (typeof listBoxRef === 'function') {
        listBoxRef(newRef)
      }
      else if (typeof listBoxRef === 'object') {
        (listBoxRef as React.MutableRefObject<HTMLElement | null>).current = newRef
      }
    }
  }
  const { listBoxProps, labelProps } = useListBox(
    {
      ...rest,
      escapeKeyBehavior,
      label,
      disabledKeys: isDisabled ? keys : disabledKeys,
    },
    state,
    mergeRefs as unknown as RefObject<HTMLElement | null>,
  )

  const listBoxTokens = {
    ...tokens,
    isDisabled,
    isRequired,
    isInvalid,
  }

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={listBoxTokens} customTheme={customTheme}>
      {label != null && (
        <Typography {...labelProps} themeName={`${themeName}.label`} tokens={listBoxTokens}>
          {label}
        </Typography>
      )}
      <BoxWithForwardRef
        ref={listBoxRef}
        as="ul"
        {...listBoxProps}
        themeName={`${themeName}.list`}
        tokens={listBoxTokens}
      >
        {Array.from(state.collection, (item) => {
          const { key } = item
          const type = item.type ?? 'item'
          const Component = itemComponents[type] ?? Option
          return (
            <Component
              key={key}
              {...{ [type]: item }}
              state={state}
              tokens={{ ...tokens, type }}
              themeName={`${themeName}.${type}`}
              linkElementType={linkElementType}
            />
          )
        })}
      </BoxWithForwardRef>
      {(isError && errorMessage != null) && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={{ ...listBoxTokens, isError }}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}

ControlledListBox.displayName = 'ControlledListBox'

export function ListBox(props: TListBoxFormProps<object, TToken>) {
  const state = useListState(props)
  const ref = useRef<HTMLElement>(null)
  return <ControlledListBox {...props} state={state} ref={ref} />
}

export function ControlledReactHookFormListBox({ ref: listBoxRef, ...props }: TControlledReactHookFormListBoxProps<object, TToken> & { ref?: React.Ref<HTMLElement | null> }) {
  const { name, rules, isRequired, isDisabled, tokens, selectionMode = 'single', errorMessage, ...rest } = props
  const { control, setValue, watch, getValues } = useFormContext()

  const { selectedKeys = watch(name), defaultSelectedKeys = getValues(name) } = rest
  const { t } = useTranslation()
  const fieldOnChangeRef = useRef<((value: Selection) => void) | null>(null)

  const mergedRules: typeof rules = {
    required: isRequired ? (t('FORM.ERROR.REQUIRED') ?? 'required') : false,
    disabled: isDisabled,
    ...rules,
  }

  const state = useListState({
    ...rest,
    selectionMode,
    selectedKeys,
    children: props.children,
    onSelectionChange: (keys: Selection) => {
      rest.onSelectionChange?.(keys)
      setValue(name, keys, { shouldDirty: true, shouldTouch: true })
      fieldOnChangeRef.current?.(keys)
    },
  })

  return (
    <Controller
      {...rest}
      defaultValue={defaultSelectedKeys}
      name={name}
      control={control}
      rules={mergedRules}
      disabled={mergedRules?.disabled}
      render={({ field, fieldState }) => {
        const { ref, onChange, ...fieldProps } = field
        fieldOnChangeRef.current = onChange
        const isError = !isEmpty(fieldState.error)

        const validityField = {
          isDisabled: field.disabled ?? false,
          isRequired: mergedRules?.required === true || mergedRules?.required === 'required',
          isInvalid: fieldState.invalid,
          isError,
        }

        const { isError: _isError, ...validityFieldWithoutError } = validityField

        const validityTokens = {
          ...tokens,
          ...validityFieldWithoutError,
        }

        return (
          <ControlledListBox
            {...mergeProps(rest, fieldProps, validityField)}
            state={state}
            tokens={validityTokens}
            isError={isError}
            selectionMode={selectionMode}
            selectedKeys={selectedKeys}
            defaultSelectedKeys={defaultSelectedKeys}
            errorMessage={errorMessage ?? fieldState.error?.message}
            ref={listBoxRef}
          />
        )
      }}
    />
  )
}

ControlledReactHookFormListBox.displayName = 'ControlledReactHookFormListBox'

export function ReactHookFormListBox(props: TReactHookFormListBoxProps<object, TToken>) {
  const ref = useRef<HTMLElement>(null)
  return <ControlledReactHookFormListBox {...props} ref={ref} />
}
