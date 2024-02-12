import React from 'react'
import { FocusScope, useListBox, useOption } from 'react-aria'
import useThemeContext from '../../../../providers/Theme/hooks'
import { TypographyWithForwardRef } from '../../../Typography'
import type { TListBoxProps, TOptionProps } from './Listbox.interface'

const Option = ({ item, state, themeName = 'li' }: TOptionProps) => {
  const ref = React.useRef(null)
  const { optionProps, isFocusVisible } = useOption({ key: item.key }, state, ref)

  const theme = useThemeContext(themeName)
  return (
    <TypographyWithForwardRef
      as="li"
      {...optionProps}
      tokens={{ className: `${theme} ${isFocusVisible ? 'has-focus-ring' : ''}` }}
      ref={ref}
    >
      {item.rendered}
    </TypographyWithForwardRef>
  )
}

const ListBox = (props: TListBoxProps) => {
  const ref = React.useRef(null)
  const { listBoxRef = ref, state, themeName = 'option' } = props
  const { listBoxProps } = useListBox(props, state, listBoxRef)

  return (
    <FocusScope autoFocus restoreFocus contain>
      <TypographyWithForwardRef {...listBoxProps} ref={listBoxRef} as="ul" themeName={`${themeName}.ul`}>
        {[...state.collection].map((item) => (
          <Option themeName={`${themeName}.li`} key={item.key} item={item} state={state} />
        ))}
      </TypographyWithForwardRef>
    </FocusScope>
  )
}

export { ListBox, Option }
