import React from 'react'
import { FocusRing, useSearchField } from 'react-aria'
import { useSearchFieldState } from 'react-stately'
import useThemeContext from '../../../providers/Theme/hooks'
import { useUserQueryValHook } from '../../../providers/UserSearchQuery'
import Button from '../../Button'
import Close from '../../icons/CloseBtn'
import Search from '../../icons/Search'
import Typography from '../../Typography'
import type TSearchProps from './interface'

const SearchField = (props: TSearchProps) => {
  const { setUserSearchQuery } = useUserQueryValHook()
  const { label, themeName = 'search', tokens, customTheme, disabled, errorMessage, placeholder } = props
  const state = useSearchFieldState(props)
  setUserSearchQuery(state.value)
  const ref = React.useRef(null)
  const { labelProps, inputProps, errorMessageProps, clearButtonProps } = useSearchField(props, state, ref)

  const searchTokens = { ...tokens, isError: errorMessage != null }

  const wrapperTheme = useThemeContext(`${themeName}.wrapper`, searchTokens, customTheme)
  const inputTheme = useThemeContext(`${themeName}.input`, searchTokens, customTheme)
  const labelTheme = useThemeContext(`${themeName}.label`, searchTokens, customTheme)
  const containerTheme = useThemeContext(`${themeName}.container`, searchTokens, customTheme)

  return (
    <div className={wrapperTheme} aria-disabled={disabled}>
      {/* <div aria-disabled={disabled}> */}
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label {...labelProps} className={labelTheme}>
          {label}
        </label>
      )}
      <div className={containerTheme}>
        <input ref={ref} {...inputProps} placeholder={placeholder} className={inputTheme} disabled={disabled} />
        <FocusRing focusRingClass="has-focus-ring">
          <Button
            handlePress={clearButtonProps.onPress}
            tokens={{ isIconOnly: true, buttonStyle: 'hollow' }}
            themeName={`${themeName}.icon`}
            aria-label="clear"
          >
            {state.value === '' ? <Search width="16" height="16" /> : <Close width="16" height="16" />}
          </Button>
        </FocusRing>
      </div>
      {/* </div> */}
      {errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={searchTokens} {...errorMessageProps}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

export default SearchField
