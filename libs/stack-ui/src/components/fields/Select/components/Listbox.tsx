import React from 'react'
import { useListBox, useOption } from 'react-aria'
import { TypographyWithForwardRef } from '../../../Typography'
import type { TListBoxProps, TOptionProps } from './Listbox.interface'

const Option = ({ item, state, themeName = 'li' }: TOptionProps) => {
  const ref = React.useRef(null)
  const { optionProps } = useOption({ key: item.key }, state, ref)

  return (
    <TypographyWithForwardRef as="li" {...optionProps} themeName={themeName} ref={ref}>
      {item.rendered}
    </TypographyWithForwardRef>
  )
}

const ListBox = (props: TListBoxProps) => {
  const ref = React.useRef(null)
  const { listBoxRef = ref, state, themeName = 'option' } = props
  const { listBoxProps } = useListBox(props, state, listBoxRef)

  return (
    <TypographyWithForwardRef {...listBoxProps} ref={listBoxRef} as="ul" themeName={`${themeName}.ul`}>
      {[...state.collection].map((item) => (
        <Option themeName={`${themeName}.li`} key={item.key} item={item} state={state} />
      ))}
    </TypographyWithForwardRef>
  )
}

export { ListBox, Option }
