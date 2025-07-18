'use client'

import { Item } from 'react-stately'
import type { TSelectItemProps } from './SelectItem.interface'

const SelectItem = (props: TSelectItemProps) => {
  const { key, value } = props

  return <Item key={key}>{value}</Item>
}

export default SelectItem
