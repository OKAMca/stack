import { tv } from 'tailwind-variants'

export const main = tv({
  base: 'w-full bg-slate-100',
})

export const container = tv({
  base: 'max-w-screen-lg mx-auto w-full',
  variants: {
    fullWidth: {
      true: 'max-w-full col-span-full p-0',
    },
    spacing: {
      small: 'mb-3',
      medium: 'mb-6',
      large: 'mb-8',
      none: 'mb-0',
    },
  },
})

export const grid = tv({
  extend: container,
  base: 'grid grid-cols-12 gap-6 px-4 col-span-full',
  variants: {
    fullWidth: {
      true: 'max-w-full col-span-full p-0',
    },
  },
})

export const spacer = tv({
  base: 'mb-6',
})

export const gridItem = tv({
  base: 'bg-slate-300 h-64 p-4 flex justify-start items-end',
  defaultVariants: {
    size: 'small',
  },
  variants: {
    size: {
      small: 'col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4',
      medium: 'col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8',
      large:
        'lg:col-start-3 sm:col-start-1 sm:col-end-13 lg:col-end-11 md:col-start-3 md:col-end-11 col-start-1 col-end-13',
    },
  },
})
