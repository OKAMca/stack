import { tv } from 'tailwind-variants'
import typography from '../Typography'

export const textInputWrapper = tv({
  base: 'flex flex-col rounded-md px-4 py-1 mb-3 m-0.5 border-2 aria-disabled:pointer-events-none aria-disabled:opacity-30 focus-ring-black',
})

export const textInputContainer = tv({
  base: 'flex items-center gap-4',
})

export const textInputLabel = tv({
  base: 'text-xs',
})

export const textInput = tv({
  base: '',
})

export const textInputErrorMessage = tv({
  extend: typography,
  defaultVariants: {
    size: 'footnotes',
    isError: true,
  },
})
