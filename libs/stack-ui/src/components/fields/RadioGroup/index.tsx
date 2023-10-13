/* eslint-disable no-unused-vars */
import { useRadioGroupState } from '@react-stately/radio'
import useThemeContext from 'libs/stack-ui/src/providers/Theme/hooks'
import { isEmpty } from 'lodash'
import { useRadioGroup } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { RadioGroupProvider } from '../../../providers/RadioGroup/RadioGroup'
import Typography from '../../Typography'
import type { TRadioGroupProps } from './RadioGroup.interface'

const RadioGroup = (props: TRadioGroupProps) => {
  const { label, isError = false, errorMessage, isDisabled = false, children, themeName = 'radioGroup', tokens } = props
  const state = useRadioGroupState(props)
  const { radioGroupProps } = useRadioGroup(props, state)

  const radioGroupTokens = { ...tokens, isDisabled }
  const radioGroupTheme = useThemeContext(`${themeName}.radioGroup`, radioGroupTokens)
  const radioGroupItemsGroupTheme = useThemeContext(`${themeName}.radioGroupItemsGroup`)

  return (
    <div {...radioGroupProps} aria-disabled={isDisabled} className={radioGroupTheme}>
      {label && <Typography tokens={{ size: 'h6' }}>{label}</Typography>}
      <div className={radioGroupItemsGroupTheme}>
        <RadioGroupProvider>{children}</RadioGroupProvider>
      </div>
      {isError && errorMessage && <Typography tokens={{ isError: true }}>{errorMessage}</Typography>}
    </div>
  )
}

export const ReactHookFormRadioGroup = (props: TRadioGroupProps) => {
  const { name, required, validation } = props
  const { register, formState } = useFormContext()
  const error: Error = get(formState.errors, name)
  const errMsg = error?.message ?? undefined
  const { t } = useTranslation('components')
  const { ref: refCallback, ...rest } = register(name, {
    required: required ? t('FORM.ERROR.REQUIRED') ?? 'required' : false,
    ...validation,
  })

  return <RadioGroup fieldRef={refCallback} {...rest} {...props} isError={!isEmpty(errMsg)} errorMessage={errMsg} />
}
export default RadioGroup
