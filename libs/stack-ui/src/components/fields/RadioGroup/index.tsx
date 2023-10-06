/* eslint-disable no-unused-vars */
import { useRadioGroupState } from '@react-stately/radio'
import { useRadioGroup } from 'react-aria'
import { RadioGroupProvider } from '../../../providers/RadioGroup/RadioGroup'
import type { TRadioGroupProps } from './RadioGroup.interface'

const RadioGroup = (props: TRadioGroupProps) => {
  const { label, children } = props
  const state = useRadioGroupState(props)
  const { radioGroupProps, labelProps } = useRadioGroup(props, state)

  return (
    <div {...radioGroupProps}>
      {label && <h2 {...labelProps}>{label}</h2>}
      <div className="flex flex-row flex-wrap flex-shrink-0 gap-4 md:gap-x-4 my-3 justify-start md:justify-center">
        <RadioGroupProvider>{children}</RadioGroupProvider>
      </div>
    </div>
  )
}

export default RadioGroup
