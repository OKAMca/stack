import { tv } from 'tailwind-variants'

export const checkboxLabel = tv({
  base: `text-gray-2 flex flex-row items-start hover:cursor-pointer`,
  variants: {
    isDisabled: {
      true: 'text-gray-6',
    },
  },
})

export const checkBox = tv({
  base: `w-5 h-5 mt-0.5 mr-2.5 rounded-full border-2 border-gray-2 shrink-0 hover:cursor-pointer flex items-center justify-center`,
  variants: {
    isDisabled: {
      true: 'border-gray-6',
    },
    isFocused: {
      true: `outline-black [outline-offset: 2px]`,
    },
    isError: {
      true: 'border-red-500',
    },
  },
})

export const checkMark = tv({
  base: `hidden w-3 h-3 bg-gray-2 rounded-full`,
  variants: {
    selected: {
      true: 'block',
    },
  },
})
