'use client'

import { Box } from '@okam/stack-ui'
import React, { useCallback } from 'react'
import { FocusRing, useSearchField } from 'react-aria'
import { useSearchFieldState } from 'react-stately'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TToken } from '../../../providers/Theme/interface'
import { useUserQueryValHook } from '../../../providers/UserSearchQuery'
import Button from '../../Button'
import Close from '../../icons/CloseBtn'
import Search from '../../icons/Search'
import Typography from '../../Typography'
import type TSearchProps from './interface'

const BuiltinIcon = ({ value }: { value: string }) => {
  if (value === '') {
    return <Search width="16" height="16" />
  }

  return <Close width="16" height="16" />
}

const SearchField = <T extends TToken>(props: TSearchProps<T>) => {
  const { setUserSearchQuery } = useUserQueryValHook()
  const {
    label,
    themeName = 'search',
    tokens,
    customTheme,
    disabled,
    errorMessage,
    placeholder,
    icon,
    isDisabled,
  } = props
  const internalIsDisabled = isDisabled || disabled
  const internalProps = { ...props, isDisabled: internalIsDisabled }
  const state = useSearchFieldState(internalProps)
  const ref = React.useRef(null)
  const { labelProps, inputProps, errorMessageProps, clearButtonProps } = useSearchField(internalProps, state, ref)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserSearchQuery(state.value)
      inputProps.onChange?.(e)
    },
    [setUserSearchQuery, state.value, inputProps],
  )

  const isError = errorMessage != null

  const searchTokens = { ...tokens, isError, isDisabled: internalIsDisabled ?? false }

  const inputTheme = useThemeContext(`${themeName}.input`, searchTokens, customTheme)

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={searchTokens} aria-disabled={internalIsDisabled ?? false}>
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <Box {...labelProps} as="label" themeName={`${themeName}.label`} tokens={searchTokens}>
          {label}
        </Box>
      )}
      <Box themeName={`${themeName}.container`} tokens={searchTokens}>
        <input
          ref={ref}
          {...inputProps}
          onChange={handleChange}
          placeholder={placeholder}
          className={inputTheme}
          disabled={internalIsDisabled}
        />
        <FocusRing focusRingClass="has-focus-ring">
          <Button
            isDisabled={internalIsDisabled}
            handlePress={clearButtonProps.onPress}
            tokens={{ isIconOnly: true, buttonStyle: 'hollow', isDisabled: internalIsDisabled ?? false }}
            themeName={`${themeName}.icon`}
            aria-label="clear"
          >
            {icon == null && <BuiltinIcon value={state.value} />}
            {icon != null && icon}
          </Button>
        </FocusRing>
      </Box>
      {errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={searchTokens} {...errorMessageProps}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}

export default SearchField
