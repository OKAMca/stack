import { Item } from 'react-stately'
import Select from '../../components/fields/Select/Select'
import type { TSelectProps } from '../../components/fields/Select/Select.interface'

const SelectContent = ({ disabled = false, isError = false, errorMessage, ...props }: TSelectProps) => (
  <Select
    id={props.id}
    label={props.label}
    name={props.name}
    placeholderLabel={props.placeholderLabel}
    disabled={disabled}
    isError={isError}
    errorMessage={errorMessage}
  >
    <Item>Item One</Item>
    <Item>Item Two</Item>
    <Item>Item Three</Item>
    <Item>Item Four</Item>
  </Select>
)

export default SelectContent
