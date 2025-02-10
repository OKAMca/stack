'use client'

import React from 'react'
import { useTagGroup } from 'react-aria'
import { useListState } from 'react-stately'
import useThemeContext from '../../providers/Theme/hooks'
import Box, { BoxWithForwardRef } from '../Box'
import Typography from '../Typography'
import Tag from './components/Tag'
import type { TTagGroupProps } from './interface'

const TagGroup = <T extends object>(props: TTagGroupProps<T>) => {
  const {
    selectionMode = 'multiple',
    label,
    description,
    errorMessage,
    themeName = 'tagGroup',
    tokens,
    customTheme,
  } = props
  const ref = React.useRef(null)

  const state = useListState({ ...props, selectionMode })
  const { gridProps, labelProps, descriptionProps, errorMessageProps } = useTagGroup(
    { ...props, selectionMode },
    state,
    ref,
  )

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme}>
      <Typography themeName={`${themeName}.label`} tokens={tokens} customTheme={customTheme} {...labelProps}>
        {label}
      </Typography>
      <BoxWithForwardRef
        themeName={`${themeName}.tags`}
        tokens={tokens}
        customTheme={customTheme}
        {...gridProps}
        ref={ref}
      >
        {[...state.collection].map((item) => (
          <Tag
            key={item.key}
            item={item}
            state={state}
            themeName={`${themeName}.tag`}
            tokens={tokens}
            customTheme={customTheme}
          />
        ))}
      </BoxWithForwardRef>
      {description && (
        <Typography
          themeName={`${themeName}.description`}
          tokens={tokens}
          customTheme={customTheme}
          {...descriptionProps}
        >
          {description}
        </Typography>
      )}
      {errorMessage && (
        <Typography
          themeName={`${themeName}.errorMessage`}
          tokens={tokens}
          customTheme={customTheme}
          {...errorMessageProps}
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}

export default TagGroup
