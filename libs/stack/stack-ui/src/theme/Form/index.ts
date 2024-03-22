import { tv } from 'tailwind-variants'
import button from '../Button'

export const formContainer = tv({
  base: 'w-[512px] grid grid-cols-2 gap-2',
})

export const formField = tv({
  base: 'flex flex-row',
  variants: {
    width: {
      full: 'w-full',
      half: 'w-1/2',
    },
  },
  defaultVariants: {
    width: 'full',
  },
})

export const formSubmitButton = tv({
  extend: tv({
    base: button.base,
    variants: { ...button.variants, ...formField.variants },
    defaultVariants: {
      ...button.defaultVariants,
      ...formField.defaultVariants,
    },
  }),
  base: 'w-full col-span-2',
  defaultVariants: {
    shape: 'circular',
    width: 'full',
  },
})
