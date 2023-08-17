'use client'

import { useCheckbox } from '@react-aria/checkbox'
import { FocusRing, useFocusRing } from '@react-aria/focus'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useToggleState } from '@react-stately/toggle'
import { useRef } from 'react'
import { mergeProps } from 'react-aria'
import useThemeContext from '../../../providers/Theme/hooks'
import Typography from '../../Typography'
import type { TCheckboxProps } from './Checkbox.interface'

const Checkbox = (props: TCheckboxProps) => {
  const {
    id,
    label,
    isDisabled = false,
    isError = false,
    errorMessage,
    ariaLabel,
    themeName = 'checkbox',
    tokens,
    customTheme,
  } = props
  const state = useToggleState(props)
  const ref = useRef<HTMLInputElement | null>(null)
  const { inputProps } = useCheckbox(props, state, ref)
  const { focusProps, isFocusVisible } = useFocusRing()

  const checkBoxTokens = { ...tokens, selected: state.isSelected, isDisabled, isError, isFocusVisible }
  const labelTheme = useThemeContext(`${themeName}.label`, checkBoxTokens, customTheme)
  const checkBoxTheme = useThemeContext(`${themeName}.checkBox`, checkBoxTokens, customTheme)
  const checkmarkTheme = useThemeContext(`${themeName}.checkMark`, checkBoxTokens, customTheme)

  return (
    <div>
      <label htmlFor={id} className={labelTheme}>
        <VisuallyHidden>
          <input type="checkbox" ref={ref} aria-label={ariaLabel} {...mergeProps(focusProps, inputProps)} />
        </VisuallyHidden>
        <FocusRing focusRingClass="focus-ring">
          <div className={checkBoxTheme}>
            <div className={checkmarkTheme} />
          </div>
        </FocusRing>
        <span>{label}</span>
      </label>
      {isError && errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={checkBoxTokens}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export default Checkbox
