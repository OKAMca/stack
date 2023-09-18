import { tv } from 'tailwind-variants'

export const textArea = tv({
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
