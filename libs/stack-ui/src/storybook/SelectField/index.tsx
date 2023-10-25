import { useState } from 'react'
import { Item } from 'react-stately'
import Select from '../../components/fields/Select/Select'
import type { TSelectProps } from '../../components/fields/Select/Select.interface'

const SelectContent = ({
  disabled = false,
  isError = false,
  errorMessage,
  id,
  label,
  name,
  placeholderLabel,
  ...rest
}: TSelectProps) => {
  const [value, setValue] = useState<string>()

  return (
    <>
      <button type="button" onClick={() => setValue('1')}>
        1
      </button>
      <button type="button" onClick={() => setValue('2')}>
        2
      </button>
      <button type="button" onClick={() => setValue('3')}>
        3
      </button>
      <button type="button" onClick={() => setValue('4')}>
        4
      </button>
      <Select
        id={id}
        label={label}
        name={name}
        placeholderLabel={placeholderLabel}
        disabled={disabled}
        isError={isError}
        errorMessage={errorMessage}
        {...rest}
        onSelectionChange={(key) => {
          setValue(key.toString())
          console.log('selection changed')
        }}
        value={value}
      >
        <Item key={1}>Item One</Item>
        <Item key={2}>Item Two</Item>
        <Item key={3}>Item Three</Item>
        <Item key={4}>Item Four</Item>
      </Select>
    </>
  )
}

export default SelectContent
