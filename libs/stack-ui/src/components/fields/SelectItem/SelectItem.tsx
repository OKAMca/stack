import type { TSelectItemProps } from './SelectItem.interface'

const SelectItem = (props: TSelectItemProps) => {
  const { label, value } = props

  return <option value={value}>{label}</option>
}

export default SelectItem
