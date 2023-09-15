import { tv } from 'tailwind-variants'

export const shareButtonContainer = tv({
  base: 'flex print:hidden',
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
  base: 'relative z-20 !bg-color-1-500 hover:!bg-color-1-400 p-4 active:!bg-color-1-400 rounded-full text-white focus-ring-black',
  variants: {
    isOpen: {
      true: '',
      false: '',
    },
  },
})

export const shareButtonLinksList = tv({
  base: '!bg-color-1-200 relative opacity-0 invisible transition duration-300 flex items-center p-0 bg-primary-1 pb-0 z-0 rounded-b-full rounded-t-full',
  defaultVariants: {
    listDirection: 'row',
  },
  variants: {
    listDirection: {
      row: 'flex-row pl-14 [margin-left:-3.25rem]',
      column: 'flex-col [margin-top:-3.25rem] [width:calc(100% + .5rem)] pt-14',
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
