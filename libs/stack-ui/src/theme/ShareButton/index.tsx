import { tv } from 'tailwind-variants'

export const shareButtonContainer = tv({
  base: 'flex print:hidden relative',
  defaultVariants: {
    listDirection: 'row',
  },
  variants: {
    listDirection: {
      row: 'flex-row',
      column: 'flex-col',
    },
  },
})

export const shareButton = tv({
  base: 'relative z-20 !bg-color-1-500 hover:!bg-color-1-400 w-16 h-16 flex justify-center items-center active:!bg-color-1-400 rounded-full text-white focus-ring-black',
  variants: {
    isOpen: {
      true: '',
      false: '',
    },
  },
})

export const shareButtonLinksList = tv({
  base: '!bg-color-1-200 absolute opacity-0 invisible flex transition duration-300 items-center p-0 bg-primary-1 z-0 rounded-b-full rounded-t-full',
  defaultVariants: {
    listDirection: 'row',
  },
  variants: {
    listDirection: {
      row: 'flex-row pl-14 h-16 left-0',
      column: 'flex-col [width:calc(100% + .5rem)] pt-14 w-16 top-0',
    },
    isOpen: {
      true: 'opacity-100 visible',
      false: '',
    },
  },
})

export const shareButtonLink = tv({
  base: `
    flex
    items-center
    justify-center
    cursor-pointer
    bg-color-1-200
    hover:bg-color-1-300
    w-full
    text-color-1-500
    rounded-none
    p-2
    focus-ring-black
    z-10
    has-focus-ring:z-20
  `,
  defaultVariants: {
    listDirection: 'row',
  },
  variants: {
    listDirection: {
      row: 'last:rounded-r-full h-full',
      column: 'last:rounded-b-full',
    },
  },
})

export const shareButtonIcon = tv({
  base: 'text-white',
})

export const shareButtonLinkIcons = tv({
  base: '',
})
