'use client'

import type { ElementType } from 'react'
import { useRef } from 'react'
import { useListBox } from 'react-aria'
import { useListState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import Box, { BoxWithForwardRef } from '../../Box'
import { Anchor } from '../../Button'
import Typography from '../../Typography'
import Option from '../Option'
import ListBoxSection from './components/ListBoxSection'
import type { TListBoxProps } from './interface'

const itemComponents: Record<string, ElementType> = {
  item: Option,
  section: ListBoxSection,
}

const ListBox = <I extends object = object, T extends TToken = TToken>(props: TListBoxProps<I, T>) => {
  const {
    themeName = 'listBox',
    tokens,
    customTheme,
    label,
    escapeKeyBehavior = 'clearSelection',
    linkElementType = Anchor,
    ...rest
  } = props
  const state = useListState(props)
  const ref = useRef(null)
  const { listBoxProps, labelProps } = useListBox(
    {
      ...rest,
      escapeKeyBehavior,
      label,
    },
    state,
    ref,
  )
  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme}>
      {label && (
        <Typography {...labelProps} themeName={`${themeName}.label`} tokens={tokens}>
          {label}
        </Typography>
      )}
      <BoxWithForwardRef ref={ref} as="ul" {...listBoxProps} themeName={`${themeName}.list`} tokens={tokens}>
        {[...state.collection].map((item) => {
          const { type, key } = item
          const Component = itemComponents[type]
          return (
            <Component
              key={key}
              {...{ [type]: item }}
              state={state}
              tokens={tokens}
              themeName={`${themeName}.${type}`}
              linkElementType={linkElementType}
            />
          )
        })}
      </BoxWithForwardRef>
    </Box>
  )
}

export default ListBox
