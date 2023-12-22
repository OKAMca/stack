import { useRef } from 'react'
import { FocusRing, VisuallyHidden, useCheckboxGroupItem } from 'react-aria'
import type { CheckboxGroupState } from 'react-stately'
import { useCheckboxGroupCtx } from '../../../../../providers/CheckboxGroup'
import useThemeContext from '../../../../../providers/Theme/hooks'
import Icon from '../../../../Icon'
import Typography from '../../../../Typography'
import type { TCheckboxGroupItemProps } from '../../interface'

const ContextCheckboxGroupItem = (props: TCheckboxGroupItemProps & { state: CheckboxGroupState }) => {
  const {
    id,
    ariaLabel,
    icon,
    state,
    themeName = 'checkbox',
    customTheme,
    tokens,
    isDisabled = false,
    isError = false,
    value,
    errorMessage,
    label,
  } = props
  const ref = useRef(null)
  const { inputProps } = useCheckboxGroupItem(props, state, ref)
  const { isSelected } = state

  const checkBoxTokens = { ...tokens, selected: isSelected(value), isDisabled, isError }
  const checkBoxContainerTheme = useThemeContext(`${themeName}.container`, checkBoxTokens, customTheme)
  const checkBoxTheme = useThemeContext(`${themeName}.checkBox`, checkBoxTokens, customTheme)
  const checkMarkTheme = useThemeContext(`${themeName}.checkMark`, checkBoxTokens, customTheme)
  const checkMarkIconTheme = useThemeContext(`${themeName}.checkMarkIcon`, checkBoxTokens, customTheme)

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <label className={checkBoxContainerTheme} htmlFor={id} aria-label={ariaLabel} aria-disabled={isDisabled}>
          <VisuallyHidden>
            <input ref={ref} {...inputProps} />
          </VisuallyHidden>
          <div className={checkBoxTheme} aria-checked={isSelected(value)} role="checkbox" aria-labelledby={id}>
            <div className={checkMarkTheme}>{icon && <Icon icon={icon} customTheme={checkMarkIconTheme} />}</div>
          </div>
          <Typography themeName={`${themeName}.label`} tokens={checkBoxTokens}>
            {label}
          </Typography>
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

const CheckboxGroupItem = (props: TCheckboxGroupItemProps) => {
  const state = useCheckboxGroupCtx()
  return state && <ContextCheckboxGroupItem state={state} {...props} />
}

export default CheckboxGroupItem
