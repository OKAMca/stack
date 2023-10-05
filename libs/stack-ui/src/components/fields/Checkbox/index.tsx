'use client'

import { useCheckbox } from '@react-aria/checkbox'
import { FocusRing, useFocusRing } from '@react-aria/focus'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useToggleState } from '@react-stately/toggle'
import { useRef } from 'react'
import useThemeContext from '../../../providers/Theme/hooks'
import Icon from '../../Icon'
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
    icon,
    themeName = 'checkbox',
    tokens,
    customTheme,
  } = props
  const state = useToggleState(props)
  const ref = useRef<HTMLInputElement | null>(null)
  const { inputProps } = useCheckbox(props, state, ref)
  const { isSelected } = state
  const { focusProps, isFocusVisible } = useFocusRing()

  const checkBoxTokens = { ...tokens, selected: isSelected, isDisabled, isError, isFocusVisible }
  const labelTheme = useThemeContext(`${themeName}.label`, checkBoxTokens, customTheme)
  const checkBoxTheme = useThemeContext(`${themeName}.checkBox`, checkBoxTokens, customTheme)
  const checkMarkTheme = useThemeContext(`${themeName}.checkMark`, checkBoxTokens, customTheme)
  const checkMarkIconTheme = useThemeContext(`${themeName}.checkMarkIcon`, checkBoxTokens, customTheme)

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <label htmlFor={id} className={labelTheme} aria-label={ariaLabel} aria-disabled={isDisabled}>
          <VisuallyHidden>
            <input type="checkbox" ref={ref} aria-labelledby={id} {...inputProps} {...focusProps} />
          </VisuallyHidden>
          <div className={checkBoxTheme} aria-checked={isSelected} role="checkbox" aria-labelledby={id}>
            <div className={checkMarkTheme}>{icon && <Icon icon={icon} customTheme={checkMarkIconTheme} />}</div>
          </div>
          <Typography>{label}</Typography>
        </label>
      </FocusRing>
      {isError && errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={checkBoxTokens}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export default Checkbox
