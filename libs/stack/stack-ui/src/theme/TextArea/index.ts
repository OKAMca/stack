import { tv } from 'tailwind-variants'
import typography from '../Typography'

export const textAreaInput = tv({
  base: `
    w-full
    min-h-32
    rounded-2xl
    px-6
    h-12
    border-2
    border-solid
    transition
    duration-300
    ease-in-out
    text-gray-2
    placeholder:text-gray-2
    focus-ring-black
    
  `,
  variants: {
    isError: {
      true: 'border-red-500',
    },
  },
})

export const textAreaWrapper = tv({
  base: 'flex flex-col',
})

export const textAreaContainer = tv({
  base: 'flex items-center gap-4',
})

export const textAreaLabel = tv({
  base: 'text-gray-3 px-6',
})

export const textAreaErrorMessage = tv({
  extend: typography,
  defaultVariants: {
    size: 'footnotes',
    isError: true,
  },
})
