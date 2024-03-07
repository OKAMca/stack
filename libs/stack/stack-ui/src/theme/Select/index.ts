import { tv } from 'tailwind-variants'
import button from '../Button'
import typography from '../Typography'

export const selectButton = tv({
  extend: button,
})

export const selectList = tv({
  extend: typography,
  base: 'outline outline-2 outline-white outline-offset-2 p-2 my-4 rounded-md w-full flex flex-col gap-6',
})

export const selectPopover = tv({
  extend: button,
  base: 'w-[var(--select-container-width)]',
})

export const selectErrorMessage = tv({
  extend: typography,
  defaultVariants: {
    size: 'footnotes',
    isError: true,
  },
})

export const selectWrapper = tv({
  base: 'flex flex-col gap-4 relative',
})

export const selectContainer = tv({
  base: 'flex flex-col gap-4',
})

export const selectListItem = tv({
  base: 'transition w-full hover:text-gray-300 focus-ring-white',
})
