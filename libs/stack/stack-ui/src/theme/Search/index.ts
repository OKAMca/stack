import { tv } from 'tailwind-variants'

export const searchInput = tv({
  base: 'p-4 w-full outline-0 search-cancel:appearance-none',
  variants: {
    isDisabled: {
      true: 'opacity-60 pointer-events-none',
    },
  },
})

export const searchIcon = tv({
  base: `
    box-border 
    absolute 
    right-4 
    focus-ring-black
    outline-0
  `,
  variants: {
    cursor: {
      default: 'pointer-events-none',
      pointer: 'cursor-pointer',
    },
  },
  defaultVariants: {
    cursor: 'default',
  },
})
