'use client'

import { useRef } from 'react'
import { useListBox, useOption } from 'react-aria'
import tw from 'twin.macro'
import type { TListBoxProps, TOptionProps } from '../ComboBox.interface'

function Option({ item, state }: TOptionProps) {
  const ref = useRef(null)
  const { optionProps, isFocused } = useOption({ key: item.key }, state, ref)

  return (
    <li
      {...optionProps}
      ref={ref}
      css={isFocused ? tw`bg-gray-5` : ''}
      tw="text-white text-lg last:rounded-b-2xl py-4 cursor-pointer px-5 lg:px-7 m-0"
    >
      {item.rendered}
    </li>
  )
}

export default function ListBox(props: TListBoxProps) {
  const ref = useRef(null)
  const { listBoxRef = ref, state, listLabel } = props
  const { listBoxProps } = useListBox(props, state, listBoxRef)

  return (
    <>
      <p tw="px-5 lg:px-7 pt-3 pb-2 text-white text-sm">{listLabel}</p>
      <ul
        {...listBoxProps}
        ref={listBoxRef}
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
        }}
      >
        {[...state.collection].map((item) => (
          <Option key={item.key} item={item} state={state} />
        ))}
      </ul>
    </>
  )
}
