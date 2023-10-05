import { tv } from 'tailwind-variants'

export const checkboxContainer = tv({
  base: 'flex focus-ring-black',
})

export const checkboxLabel = tv({
  base: `hover:cursor-pointer`,
  variants: {
    color: {
      gray: 'text-gray-300',
      black: 'text-black',
    },
    isDisabled: {
      true: 'text-gray-6',
    },
  },
  defaultVariants: {
    color: 'black',
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
  base: `hidden w-4 h-4 bg-gray-300 rounded-full`,
  variants: {
    selected: {
      true: 'block text-white',
    },
  },
})

export const checkMarkIcon = tv({
  base: 'text-white w-4 h-4 [&_svg]:w-4 [&_svg]:h-4',
})
