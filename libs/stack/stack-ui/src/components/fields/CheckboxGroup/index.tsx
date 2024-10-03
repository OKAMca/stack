'use client'

/* eslint-disable no-unused-vars */
import { useCheckboxGroupState } from '@react-stately/checkbox'
import { useCheckboxGroup } from 'react-aria'
import { CheckboxGroupProvider } from '../../../providers/CheckboxGroup'
import type { TToken } from '../../../providers/Theme/interface'
import Box from '../../Box'
import Typography from '../../Typography'
import type { TCheckboxGroupProps } from './interface'

const CheckboxGroup = <T extends TToken>(props: TCheckboxGroupProps<T>) => {
  const {
    label,
    isError = false,
    errorMessage,
    isDisabled = false,
    children,
    themeName = 'checkboxGroup',
    tokens,
  } = props
  const state = useCheckboxGroupState(props)
  const { groupProps, labelProps, errorMessageProps } = useCheckboxGroup(props, state)

  const CheckboxGroupTokens = { ...tokens, isDisabled }

  return (
    <Box
      {...groupProps}
      aria-disabled={isDisabled}
      themeName={`${themeName}.checkboxGroup`}
      tokens={CheckboxGroupTokens}
    >
      {label && (
        <Typography {...labelProps} tokens={{ size: 'h6' }}>
          {label}
        </Typography>
      )}
      <Box themeName={`${themeName}.checkboxGroupItemsGroup`}>
        <CheckboxGroupProvider state={state}>{children}</CheckboxGroupProvider>
      </Box>
      {isError && errorMessage && (
        <Typography {...errorMessageProps} tokens={{ isError: true }}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}
export default CheckboxGroup
