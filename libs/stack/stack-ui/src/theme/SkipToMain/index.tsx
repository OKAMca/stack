import { tv } from 'tailwind-variants'
import button from '../Button'

export const skipToMain = tv({
  extend: button,
  base: `
    left-1/2
    absolute
    -translate-x-1/2
    -translate-y-[300px]
    transition-transform
    focus:-translate-x-1/2
    focus:translate-y-[75px]
  `,
})
