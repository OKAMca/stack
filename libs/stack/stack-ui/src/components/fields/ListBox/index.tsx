'use client'

import { filterDOMProps, mergeProps } from '@react-aria/utils'
import type { Selection } from '@react-types/shared'
import { isEmpty } from 'radashi'
import type { ElementType, RefObject } from 'react'
import { useRef } from 'react'
import { useListBox } from 'react-aria'
import { Controller, useFormContext } from 'react-hook-form'
import { useListState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import { useTranslation } from '../../../providers/Translation'
import Box, { BoxWithForwardRef } from '../../Box'
import { Anchor } from '../../Button'
import Typography from '../../Typography'
import Option from '../Option'
import ListBoxSection from './components/ListBoxSection'
import type { TListBoxFormProps, TReactHookFormListBoxProps } from './interface'

const itemComponents: Record<string, ElementType> = {
  item: Option,
  section: ListBoxSection,
}

const ListBox = <I extends object = object, T extends TToken = TToken>(props: TListBoxFormProps<I, T>) => {
  const {
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
  const state = useListState(props)
  const keys = state.collection.getKeys()
  const listBoxRef = useRef<HTMLElement | null>(null)
  const mergeRefs = (ref: HTMLElement) => {
    if (ref) {
      fieldRef?.(ref)
      listBoxRef.current = ref
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
    isError,
  }

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={listBoxTokens} customTheme={customTheme}>
      {label && (
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
        {[...state.collection].map((item) => {
          const { type, key } = item
          const Component = itemComponents[type]
          return (
            <Component
              key={key}
              {...{ [type]: item }}
              state={state}
              tokens={tokens}
              themeName={`${themeName}.${type}`}
              linkElementType={linkElementType}
            />
          )
        })}
      </BoxWithForwardRef>
      {isError && errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={listBoxTokens}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}

export default ListBox

export const ReactHookFormListBox = (props: TReactHookFormListBoxProps) => {
  const { name, rules, isRequired, isDisabled, tokens, selectionMode = 'single', errorMessage, ...rest } = props
  const { control, setValue, watch, getValues } = useFormContext()

  const { selectedKeys = watch(name), defaultSelectedKeys = getValues(name) } = rest
  const { t } = useTranslation()

  const mergedRules: typeof rules = {
    required: isRequired ? (t('FORM.ERROR.REQUIRED') ?? 'required') : false,
    disabled: isDisabled,
    ...rules,
  }

  return (
    <Controller
      {...filterDOMProps(rest)}
      defaultValue={defaultSelectedKeys}
      name={name}
      control={control}
      rules={mergedRules}
      disabled={mergedRules?.disabled}
      render={({ field, fieldState }) => {
        const { ref, ...fieldProps } = field
        const isError = !isEmpty(fieldState.error)

        const validityField = {
          isDisabled: field.disabled ?? false,
          isRequired: rules?.required === true || rules?.required === 'required',
          isInvalid: fieldState.invalid,
          isError,
        }

        const validityTokens = {
          ...tokens,
          ...validityField,
        }

        return (
          <ListBox
            {...mergeProps(rest, fieldProps, validityField, {
              onSelectionChange: (keys: Selection) => {
                setValue(name, keys)
              },
            })}
            tokens={validityTokens}
            selectionMode={selectionMode}
            selectedKeys={selectedKeys}
            defaultSelectedKeys={defaultSelectedKeys}
            errorMessage={errorMessage ?? fieldState.error?.message}
          />
        )
      }}
    />
  )
}
