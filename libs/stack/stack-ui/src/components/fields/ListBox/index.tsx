import type { ElementType, RefObject } from 'react'
import { forwardRef, useRef } from 'react'
import { useListBox } from 'react-aria'
import { useListState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import Box, { BoxWithForwardRef } from '../../Box'
import { Anchor } from '../../Button'
import Typography from '../../Typography'
import Option from '../Option'
import ListBoxSection from './components/ListBoxSection'
import type { TControlledListBoxProps, TListBoxProps } from './interface'

const itemComponents: Record<string, ElementType> = {
  item: Option,
  section: ListBoxSection,
}

export const ControlledListBox = forwardRef<HTMLElement, TControlledListBoxProps<object, TToken>>((props, ref) => {
  const {
    themeName = 'listBox',
    tokens,
    customTheme,
    label,
    escapeKeyBehavior = 'clearSelection',
    linkElementType = Anchor,
    state,
    as,
    ...rest
  } = props

  const { listBoxProps, labelProps } = useListBox(
    {
      ...rest,
      escapeKeyBehavior,
      label,
    },
    state,
    ref as RefObject<HTMLElement>,
  )
  console.log([...state.collection])
  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme} as={as}>
      {label && (
        <Typography {...labelProps} themeName={`${themeName}.label`} tokens={tokens}>
          {label}
        </Typography>
      )}
      <BoxWithForwardRef ref={ref} as="ul" {...listBoxProps} themeName={`${themeName}.list`} tokens={tokens}>
        {[...state.collection].map((item) => {
          const { key, hasChildNodes } = item
          console.log(hasChildNodes, key)
          const type = item.type ?? 'item'
          const Component = itemComponents[type]
          return (
            <Component
              key={key}
              {...{ [type]: item }}
              state={state}
              tokens={{ ...tokens, type }}
              themeName={`${themeName}.${type}`}
              linkElementType={linkElementType}
            />
          )
        })}
      </BoxWithForwardRef>
    </Box>
  )
})

ControlledListBox.displayName = 'ControlledListBox'

const ListBox = (props: TListBoxProps<object, TToken>) => {
  const state = useListState(props)
  const ref = useRef<HTMLElement>(null)
  return <ControlledListBox {...props} state={state} ref={ref} />
}

export default ListBox
