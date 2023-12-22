import { tv } from 'tailwind-variants'

export const radioGroup = tv({
  base: `block`,
  variants: {
    isDisabled: {
      true: 'opacity-60 pointer-events-none',
    },
  },
})

export const radioGroupItemsGroup = tv({
  base: `flex flex-col gap-4 py-8`,
})
