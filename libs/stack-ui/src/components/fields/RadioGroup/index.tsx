/* eslint-disable no-unused-vars */
import { useRadioGroupState } from '@react-stately/radio'
import useThemeContext from 'libs/stack-ui/src/providers/Theme/hooks'
import { useRadioGroup } from 'react-aria'
import { RadioGroupProvider } from '../../../providers/RadioGroup/RadioGroup'
import Typography from '../../Typography'
import type { TRadioGroupProps } from './RadioGroup.interface'

const RadioGroup = (props: TRadioGroupProps) => {
  const {
    label,
    isError = false,
    errorMessage,
    isDisabled = false,
    children,
    themeName = 'radioGroup',
    tokens,
    customTheme,
  } = props
  const state = useRadioGroupState(props)
  const { radioGroupProps } = useRadioGroup(props, state)

  const radioGroupTokens = { ...tokens, isError, isDisabled }
  const radioGroupTheme = useThemeContext(`${themeName}.radioGroup`, radioGroupTokens, customTheme)
  const radioGroupItemsGroupTheme = useThemeContext(`${themeName}.radioGroupItemsGroup`, radioGroupTokens, customTheme)

  return (
    <div {...radioGroupProps} aria-disabled={isDisabled} className={radioGroupTheme}>
      {label && <Typography themeName={`${themeName}.label`}>{label}</Typography>}
      <div className={radioGroupItemsGroupTheme}>
        <RadioGroupProvider>{children}</RadioGroupProvider>
      </div>
      {isError && errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={radioGroupTokens}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export default RadioGroup
