'use client'

import type { TToken } from '../../../providers/Theme/interface'
import type { TRadioGroupProps } from './interface'
import { useRadioGroup } from 'react-aria'
import { useRadioGroupState } from 'react-stately'
import { RadioGroupProvider } from '../../../providers/RadioGroup/RadioGroup'
import { Box } from '../../Box'
import { Typography } from '../../Typography'

function RadioGroup<T extends TToken>(props: TRadioGroupProps<T>) {
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
      {label != null && <Typography tokens={{ size: 'h6' }}>{label}</Typography>}
      <Box themeName={`${themeName}.radioGroupItemsGroup`}>
        <RadioGroupProvider state={state}>{children}</RadioGroupProvider>
      </Box>
      {isError && errorMessage != null && <Typography tokens={{ isError: true }}>{errorMessage}</Typography>}
    </Box>
  )
}
export default RadioGroup
