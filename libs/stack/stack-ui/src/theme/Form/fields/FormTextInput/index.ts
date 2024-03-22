import { tv } from 'tailwind-variants'
import { formField } from '../..'
import { textInput } from '../../../TextInputField'

const formTextInputField = tv({
  extend: tv({
    base: formField.base,
    slots: {
      ...textInput.slots,
    },
    variants: {
      ...formField.variants,
    },
    defaultVariants: {
      ...formField.defaultVariants,
    },
  }),
  compoundSlots: [
    {
      // @ts-expect-error https://github.com/tailwindlabs/tailwind-variants/issues/23
      slots: ['input'],
      class: 'w-full',
    },
    {
      // @ts-expect-error https://github.com/tailwindlabs/tailwind-variants/issues/23
      slots: ['wrapper'],
      class: 'w-full',
    },
    {
      // @ts-expect-error https://github.com/tailwindlabs/tailwind-variants/issues/23
      slots: ['container'],
      class: 'flex flex-col items-center',
    },
  ],
  variants: {
    isError: {
      true: '',
    },
  },
  compoundVariants: [
    {
      width: 'full',
      class: {
        container: 'col-span-2',
      },
    },
    {
      isError: true,
      class: {
        wrapper: 'border-red-500',
      },
    },
  ],
})

export default formTextInputField
