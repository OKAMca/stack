'use client'

/* eslint-disable no-unused-vars */
import { useRadioGroupState } from '@react-stately/radio'
import { useRadioGroup } from 'react-aria'
import { RadioGroupProvider } from '../../../providers/RadioGroup/RadioGroup'
import type { TToken } from '../../../providers/Theme/interface'
import Box from '../../Box'
import Typography from '../../Typography'
import type { TRadioGroupProps } from './interface'

const RadioGroup = <T extends TToken>(props: TRadioGroupProps<T>) => {
  const { label, isError = false, errorMessage, isDisabled = false, children, themeName = 'radioGroup', tokens } = props
  const state = useRadioGroupState(props)
  const { radioGroupProps } = useRadioGroup(props, state)

  const radioGroupTokens = { ...tokens, isDisabled }

  return (
    <Box
      {...radioGroupProps}
      aria-disabled={isDisabled}
      themeName={`${themeName}.radioGroup`}
      tokens={radioGroupTokens}
    >
      {label && <Typography tokens={{ size: 'h6' }}>{label}</Typography>}
      <Box themeName={`${themeName}.radioGroupItemsGroup`}>
        <RadioGroupProvider state={state}>{children}</RadioGroupProvider>
      </Box>
      {isError && errorMessage && <Typography tokens={{ isError: true }}>{errorMessage}</Typography>}
    </Box>
  )
}
export default RadioGroup
