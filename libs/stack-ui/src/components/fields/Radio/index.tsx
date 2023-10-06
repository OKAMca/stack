'use client'

import { useRef } from 'react'
import { useRadio, VisuallyHidden, useFocusRing, FocusRing, mergeProps } from 'react-aria'
import { useRadioGroupCtx } from '../../../providers/RadioGroup/RadioGroup'
import useThemeContext from '../../../providers/Theme/hooks'
import Icon from '../../Icon'
import Typography from '../../Typography'
import type { TRadioProps } from './Radio.interface'

const Radio = (props: TRadioProps) => {
  const {
    id,
    label,
    isDisabled = false,
    isError = false,
    errorMessage,
    ariaLabel,
    icon,
    themeName = 'radio',
    tokens,
    customTheme,
    value,
  } = props
  const state = useRadioGroupCtx()
  const ref = useRef<HTMLInputElement | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { inputProps } = useRadio(props, state!, ref)
  const isSelected = state?.selectedValue === value
  const { focusProps } = useFocusRing()

  const radioTokens = { ...tokens, selected: isSelected, isDisabled, isError }
  const labelTheme = useThemeContext(`${themeName}.label`, radioTokens, customTheme)
  const radioTheme = useThemeContext(`${themeName}.radio`, radioTokens, customTheme)
  const selectedMarkTheme = useThemeContext(`${themeName}.selectedMark`, radioTokens, customTheme)

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <label htmlFor={id} className={labelTheme} aria-label={ariaLabel} aria-disabled={isDisabled}>
          <VisuallyHidden>
            <input type="radio" {...mergeProps(focusProps, inputProps)} ref={ref} />
          </VisuallyHidden>
          <div className={radioTheme} aria-checked={isSelected} role="radio" aria-labelledby={id}>
            <div className={selectedMarkTheme} />
          </div>
          <Typography themeName={`${themeName}.label`}>{label}</Typography>
        </label>
      </FocusRing>
      {isError && errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={radioTokens}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
export default Radio
