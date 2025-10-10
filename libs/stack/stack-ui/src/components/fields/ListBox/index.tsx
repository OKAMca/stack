'use client'

import { mergeProps } from '@react-aria/utils'
import type { Selection } from '@react-types/shared'
import { isEmpty } from 'radashi'
import type { ElementType, RefObject } from 'react'
import { useRef, forwardRef } from 'react'
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
import type {
  TControlledListBoxFormProps,
  TListBoxFormProps,
  TReactHookFormListBoxProps,
  TControlledReactHookFormListBoxProps,
} from './interface'

const itemComponents: Record<string, ElementType> = {
  item: Option,
  section: ListBoxSection,
}

export const ControlledListBox = forwardRef<HTMLElement, TControlledListBoxFormProps<object, TToken>>(
  (props, listBoxRef) => {
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
    const mergeRefs = (newRef: HTMLElement) => {
      if (newRef) {
        fieldRef?.(newRef)
        if (!listBoxRef) return
        if (typeof listBoxRef === 'function') {
          listBoxRef(newRef)
        } else {
          // eslint-disable-next-line no-param-reassign
          listBoxRef.current = newRef
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
            const { key } = item
            const type = item.type ?? 'item'
            const Component = itemComponents[type]
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
        {isError && errorMessage && (
          <Typography themeName={`${themeName}.errorMessage`} tokens={listBoxTokens}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    )
  },
)

ControlledListBox.displayName = 'ControlledListBox'

const ListBox = (props: TListBoxFormProps<object, TToken>) => {
  const state = useListState(props)
  const ref = useRef<HTMLElement>(null)
  return <ControlledListBox {...props} state={state} ref={ref} />
}

export default ListBox

export const ControlledReactHookFormListBox = forwardRef<
  HTMLElement,
  TControlledReactHookFormListBoxProps<object, TToken>
>((props, listBoxRef) => {
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
      {...rest}
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
          isRequired: mergedRules?.required === true || mergedRules?.required === 'required',
          isInvalid: fieldState.invalid,
          isError,
        }

        const validityTokens = {
          ...tokens,
          ...validityField,
        }

        return (
          <ControlledListBox
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
            ref={listBoxRef}
          />
        )
      }}
    />
  )
})

ControlledReactHookFormListBox.displayName = 'ControlledReactHookFormListBox'

export const ReactHookFormListBox = (props: TReactHookFormListBoxProps<object, TToken>) => {
  const state = useListState(props)
  const ref = useRef<HTMLElement>(null)
  return <ControlledReactHookFormListBox {...props} state={state} ref={ref} />
}
