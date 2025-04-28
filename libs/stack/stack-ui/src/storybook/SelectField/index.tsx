import { useState } from 'react'
import Box from '../../components/Box'
import Select from '../../components/fields/Select/Select'
import type { TSelectProps } from '../../components/fields/Select/Select.interface'
import type { Nullable } from '../../types/components'

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
  const [value, setValue] = useState<Nullable<string>>()

  return (
    <>
      <Box>
        <button type="button" onClick={() => setValue(null)}>
          Set back to no value
        </button>
      </Box>
      <Box>
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
      </Box>
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
        }}
        value={value}
        options={[
          { key: 'header', value: 'Section 1' },
          { key: '1', value: 'Option 1' },
          { key: '2', value: 'Option 2' },
          { key: '3', value: 'Option 3' },
          { key: 'header', value: 'Section 2' },
          { key: '5', value: 'Option 5' },
          { key: '6', value: 'Option 6' },
          { key: '7', value: 'Option 7' },
        ]}
      />
    </>
  )
}

export default SelectContent
