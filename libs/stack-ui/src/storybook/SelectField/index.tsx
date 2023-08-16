import { useState } from 'react'
import { Item } from 'react-stately'
import Select from '../../components/fields/Select/Select'
import type { TSelectProps } from '../../components/fields/Select/Select.interface'

const SelectContent = ({ disabled = false, isError = false, errorMessage, ...props }: TSelectProps) => {
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
        id={props.id}
        label={props.label}
        name={props.name}
        placeholderLabel={props.placeholderLabel}
        disabled={disabled}
        isError={isError}
        errorMessage={errorMessage}
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
