import { tv } from 'tailwind-variants'

export const checkboxGroup = tv({
  base: `block`,
  variants: {
    isDisabled: {
      true: 'opacity-60 pointer-events-none',
    },
  },
})

export const checkboxGroupItemsGroup = tv({
  base: `flex flex-col gap-4 py-8`,
})
