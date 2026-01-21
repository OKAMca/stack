'use client'

import type { TSelectItemProps } from './SelectItem.interface'
import { Item } from 'react-stately'

function SelectItem(props: TSelectItemProps) {
  const { key, value } = props

  return <Item key={key}>{value}</Item>
}

export default SelectItem
