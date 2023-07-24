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
    onSelectionChange={(key) => console.log('value changed : ', key)}
    defaultValue="4"
  >
    <Item key={1}>Item One</Item>
    <Item key={2}>Item Two</Item>
    <Item key={3}>Item Three</Item>
    <Item key={4}>Item Four</Item>
  </Select>
)

export default SelectContent
