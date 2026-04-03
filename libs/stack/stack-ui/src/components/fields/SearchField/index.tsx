'use client'

import type { ChangeEvent } from 'react'
import type { TToken } from '../../../providers/Theme/interface'
import type TSearchProps from './interface'
import type { TSearchActionProps } from './interface'
import { useCallback, useRef } from 'react'
import { useSearchField } from 'react-aria'
import { useSearchFieldState } from 'react-stately'
import useThemeContext from '../../../providers/Theme/hooks'
import { useUserQueryValHook } from '../../../providers/UserSearchQuery'
import { Box } from '../../Box'
import { Button } from '../../Button'
import Close from '../../icons/CloseBtn'
import Search from '../../icons/Search'
import { Typography } from '../../Typography'

function DefaultAction({ value, clearButtonProps, isDisabled, tokens, themeName }: TSearchActionProps) {
  if (value === '') {
    return (
      <Box as="span" themeName={`${themeName}.icon`} tokens={tokens} aria-hidden="true">
        <Search width="16" height="16" />
      </Box>
    )
  }

  return (
    <Button
      {...clearButtonProps}
      isDisabled={isDisabled}
      handlePress={clearButtonProps.onPress}
      tokens={{ ...tokens, isIconOnly: true, buttonStyle: 'hollow' }}
      themeName={`${themeName}.button`}
    >
      <Close width="16" height="16" />
    </Button>
  )
}

function SearchField<T extends TToken>(props: TSearchProps<T>) {
  const { setUserSearchQuery } = useUserQueryValHook()

  const {
    label,
    themeName = 'search',
    tokens,
    customTheme,
    disabled,
    errorMessage,
    placeholder,
    renderAction,
    isDisabled,
  } = props

  // eslint-disable-next-line ts/prefer-nullish-coalescing -- boolean OR is intended to combine two flags
  const internalIsDisabled = isDisabled || disabled
  const internalProps = { ...props, isDisabled: internalIsDisabled }
  const state = useSearchFieldState(internalProps)
  const ref = useRef(null)
  const { labelProps, inputProps, errorMessageProps, clearButtonProps } = useSearchField(internalProps, state, ref)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserSearchQuery(state.value)
      inputProps.onChange?.(e)
    },
    [setUserSearchQuery, state.value, inputProps],
  )

  const isError = errorMessage != null
  const searchTokens = { ...tokens, isError, isDisabled: internalIsDisabled ?? false }
  const inputTheme = useThemeContext(`${themeName}.input`, searchTokens, customTheme)
  const Action = renderAction ?? DefaultAction

  const actionProps: TSearchActionProps = {
    value: state.value,
    clearButtonProps,
    isDisabled: internalIsDisabled ?? false,
    tokens: searchTokens,
    themeName: themeName ?? 'search',
  }

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={searchTokens} aria-disabled={internalIsDisabled ?? false}>
      {label != null && (
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
        <Action {...actionProps} />
      </Box>
      {errorMessage != null && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={searchTokens} {...errorMessageProps}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}

export default SearchField
