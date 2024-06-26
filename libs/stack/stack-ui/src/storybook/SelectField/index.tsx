import { useState } from 'react'
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
          // eslint-disable-next-line no-console
          console.log('selection changed')
        }}
        value={value}
        options={[
          { key: '1', value: 'Option 1' },
          { key: '2', value: 'Option 2' },
          { key: '3', value: 'Option 3' },
          { key: '4', value: 'Option 4' },
        ]}
      />
    </>
  )
}

export default SelectContent
