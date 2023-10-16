/* eslint-disable no-unused-vars */
import { useRadioGroupState } from '@react-stately/radio'
import { isEmpty } from 'lodash'
import { useRadioGroup } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { RadioGroupProvider } from '../../../providers/RadioGroup/RadioGroup'
import Box from '../../Box'
import Typography from '../../Typography'
import type { TRadioGroupProps } from './RadioGroup.interface'

const RadioGroup = (props: TRadioGroupProps) => {
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
        <RadioGroupProvider>{children}</RadioGroupProvider>
      </Box>
      {isError && errorMessage && <Typography tokens={{ isError: true }}>{errorMessage}</Typography>}
    </Box>
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
