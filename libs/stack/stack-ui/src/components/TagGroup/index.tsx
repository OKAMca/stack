'use client'

import type { TToken } from '../../providers/Theme/interface'
import type { TTagGroupProps } from './interface'
import { useRef } from 'react'
import { useTagGroup } from 'react-aria'
import { useListState } from 'react-stately'
import { Box, BoxWithForwardRef } from '../Box'
import { Typography } from '../Typography'
import Tag from './components/Tag'

function TagGroup<Item extends object, T extends TToken = TToken>(props: TTagGroupProps<Item, T>) {
  const {
    themeName = 'tagGroup',
    tokens,
    customTheme,
    as,
    label,
    description,
    errorMessage,
    removeButtonProps = { children: '❌' },
  } = props
  const ref = useRef(null)
  const state = useListState(props)
  const { gridProps, labelProps, descriptionProps, errorMessageProps } = useTagGroup(props, state, ref)
  return (
    <Box as={as} themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme}>
      {!!label && (
        <Typography themeName={`${themeName}.label`} tokens={tokens} {...labelProps}>
          {label}
        </Typography>
      )}
      <BoxWithForwardRef themeName={`${themeName}.tags`} tokens={tokens} ref={ref} {...gridProps}>
        {[...state.collection].map(item => (
          <Tag
            themeName={`${themeName}.tag`}
            key={item.key}
            tokens={tokens}
            item={{ ...item, props: { removeButtonProps, ...item.props } }}
            state={state}
          />
        ))}
      </BoxWithForwardRef>
      {!!description && (
        <Typography themeName={`${themeName}.description`} tokens={tokens} {...descriptionProps}>
          {description}
        </Typography>
      )}
      {!!errorMessage && (
        <Typography themeName={`${themeName}.errorMessage`} tokens={tokens} {...errorMessageProps}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}

export default TagGroup
