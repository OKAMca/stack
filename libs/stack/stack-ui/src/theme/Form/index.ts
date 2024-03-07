import { tv } from 'tailwind-variants'
import button from '../Button'

export const formContainer = tv({
  base: 'w-[50vw]',
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
    width: 'half',
  },
})

export const formTextInputField = tv({
  base: '',
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
  base: 'w-full',
  defaultVariants: {
    shape: 'circular',
    width: 'full',
  },
})
