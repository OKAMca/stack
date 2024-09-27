import { useState } from 'react'
import Button from '../../Button'
import Check from '../../icons/Check'
import Checkbox from './index'

const Template = (args) => <Checkbox {...args} />

const TemplateWithButton = (args) => {
  const [checked, setChecked] = useState(args?.defaultSelected ?? false)
  const { onChange, ...restOfArgs } = args
  return (
    <div className="flex gap-4 items-center">
      <Checkbox
        isSelected={checked}
        onChange={(isSelected) => {
          setChecked(!checked)
          onChange(isSelected)
        }}
        {...restOfArgs}
      />
      <Button handlePress={() => setChecked(!checked)}>Click to check</Button>
    </div>
  )
}

export default {
  title: 'Form/Fields/Checkbox',
  component: Checkbox,

  args: {
    label: 'This is a checkbox label',
    name: 'checkbox',
    ariaLabel: 'checkbox-label',
    onChange: (isSelected) => console.log(`isSelected: ${isSelected}`),
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    id: 'checkbox-1',
  },
}

export const Gray = {
  render: Template.bind({}),
  name: 'Gray',

  args: {
    id: 'checkbox-8',

    tokens: {
      color: 'gray',
    },
  },
}

export const WithIcon = {
  render: Template.bind({}),
  name: 'With icon',

  args: {
    id: 'checkbox-2',
    icon: <Check />,
    defaultSelected: true,
  },
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    id: 'checkbox-3',
    isDisabled: true,
  },
}

export const Error = {
  render: Template.bind({}),
  name: 'Error',

  args: {
    id: 'checkbox-4',
    isError: true,
    errorMessage: 'This is an error message',
  },
}

export const CheckFromOtherComponent = {
  render: TemplateWithButton.bind({}),
  name: 'Check from other component',

  args: {
    id: 'checkbox-5',
  },
}
