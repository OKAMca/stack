import { tv } from 'tailwind-variants'

export const radioLabel = tv({
  base: `text-black flex flex-row items-center hover:cursor-pointer focus-ring-black`,
  variants: {
    isDisabled: {
      true: 'text-gray-6',
    },
  },
})

export const radio = tv({
  base: `w-6 h-6 mt-0.5 mr-2.5 rounded-full border-2 border-gray-2 shrink-0 hover:cursor-pointer flex items-center justify-center`,
  variants: {
    isDisabled: {
      true: 'border-gray-6',
    },
    isFocused: {
      true: `outline-black [outline-offset: 2px]`,
    },
  },
})

export const selectedMark = tv({
  base: `hidden w-4 h-4 bg-gray-300 rounded-full`,
  variants: {
    selected: {
      true: 'block text-white',
    },
  },
})
