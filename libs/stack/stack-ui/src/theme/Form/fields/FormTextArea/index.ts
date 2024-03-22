import { tv } from 'tailwind-variants'
import { formField } from '../..'
import { textArea } from '../../../TextArea'

const formTextAreaField = tv({
  extend: tv({
    base: formField.base,
    slots: {
      ...textArea.slots,
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
      slots: ['label'],
      class: 'px-4 text-xs',
    },
    {
      // @ts-expect-error https://github.com/tailwindlabs/tailwind-variants/issues/23
      slots: ['input'],
      class: 'w-full border-none px-4',
    },
    {
      // @ts-expect-error https://github.com/tailwindlabs/tailwind-variants/issues/23
      slots: ['wrapper'],
      class: 'w-full',
    },
    {
      // @ts-expect-error https://github.com/tailwindlabs/tailwind-variants/issues/23
      slots: ['container'],
      class: 'flex flex-col items-center border-2 border-grey-300 rounded-md pt-1',
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

export default formTextAreaField
