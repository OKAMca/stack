import { tv } from 'tailwind-variants'
import button from '../Button'
import typography from '../Typography'

const selectButton = tv({
  extend: button,
  variants: {
    isDisabled: {
      true: 'pointer-events-none opacity-30',
    },
  },
})

const selectUl = tv({
  extend: typography,
  base: 'outline outline-2 outline-white outline-offset-2 p-2 my-4 rounded-md w-full flex flex-col gap-6',
})

const selectPopover = tv({
  extend: button,
  variants: {
    width: {
      matches: 'w-[var(--select-container-width)]',
      xs: 'w-24',
      sm: 'w-32',
      md: 'w-40',
      lg: 'w-48',
      xl: 'w-56',
    },
  },
  defaultVariants: {
    width: 'md',
  },
})

const selectErrorMessage = tv({
  extend: typography,
  defaultVariants: {
    size: 'footnotes',
    isError: true,
  },
})

const selectWrapper = tv({
  base: 'flex flex-col gap-4 relative',
})

const selectContainer = tv({
  base: 'flex flex-col gap-4',
})

const selectLi = tv({
  base: 'block transition w-full hover:text-gray-300 focus-ring-white',
})

const selectTheme = {
  button: selectButton,
  ul: selectUl,
  popover: selectPopover,
  errorMessage: selectErrorMessage,
  wrapper: selectWrapper,
  container: selectContainer,
  li: selectLi,
}

export default selectTheme
