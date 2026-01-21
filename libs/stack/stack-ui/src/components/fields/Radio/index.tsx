'use client'

import type { TToken } from '../../../providers/Theme/interface'
import type { TRadioProps } from './Radio.interface'
import { isEmpty } from 'radashi'
import { useRef } from 'react'
import { FocusRing, mergeProps, useFocusRing, useRadio, VisuallyHidden } from 'react-aria'
import { get, useFormContext } from 'react-hook-form'
import { useRadioGroupCtx } from '../../../providers/RadioGroup/RadioGroup'
import useThemeContext from '../../../providers/Theme/hooks'
import { useTranslation } from '../../../providers/Translation'
import { Typography } from '../../Typography'

export function Radio<T extends TToken>(props: TRadioProps<T>) {
  const { id, label, themeName = 'radio', tokens, customTheme, value, fieldRef } = props
  const state = useRadioGroupCtx()
  const ref = useRef<HTMLInputElement | null>(null)

  const { inputProps } = useRadio(props, state!, ref)
  const isSelected = state?.selectedValue === value
  const { focusProps } = useFocusRing()

  const radioTokens = { ...tokens, selected: isSelected }
  const labelTheme = useThemeContext(`${themeName}.label`, radioTokens, customTheme)
  const radioTheme = useThemeContext(`${themeName}.radio`, radioTokens, customTheme)
  const selectedMarkTheme = useThemeContext(`${themeName}.selectedMark`, radioTokens, customTheme)

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <label htmlFor={id} className={labelTheme}>
          <VisuallyHidden>
            <input
              type="radio"
              {...mergeProps(focusProps, inputProps)}
              ref={(e) => {
                fieldRef?.(e)
                ref.current = e
              }}
            />
          </VisuallyHidden>
          <div className={radioTheme} aria-checked={isSelected} role="radio" aria-labelledby={id}>
            <div className={selectedMarkTheme} />
          </div>
          <Typography themeName={`${themeName}.label`}>{label}</Typography>
        </label>
      </FocusRing>
    </div>
  )
}

export function ReactHookFormRadio<T extends TToken>(props: TRadioProps<T>) {
  const { name, required } = props
  const { register, formState } = useFormContext()
  const error: Error = get(formState.errors, name)
  const errMsg = error?.message ?? undefined
  const { t } = useTranslation()
  const { ref: refCallback, ...rest } = register(name, {
    required: required ? (t('FORM.ERROR.REQUIRED') ?? 'required') : false,
  })

  return <Radio fieldRef={refCallback} {...rest} {...props} isError={!isEmpty(errMsg)} errorMessage={errMsg} />
}
