import { tv } from 'tailwind-variants'

export const printButton = tv({
  base: 'relative z-20 !bg-color-1-500 hover:!bg-color-1-400 w-16 h-16 flex justify-center items-center active:!bg-color-1-400 rounded-full text-white focus-ring-black',
})

export const printButtonIcon = tv({
  base: 'text-white',
})
