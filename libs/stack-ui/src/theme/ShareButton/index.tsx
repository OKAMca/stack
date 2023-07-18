import { tv } from 'tailwind-variants'
import button from '../Button'

export const shareButton = tv({
  base: 'relative z-20 !bg-color-1-500 hover:!bg-color-1-400 p-4 active:!bg-color-1-400 rounded-full text-white',
})

export const shareButtonListContainer = tv({
  base: 'bg-color-1-200 relative transition opacity-0 invisible duration-300 flex items-center p-0 pb-0 z-0 rounded-b-full rounded-t-full',
  defaultVariants: {
    listDirection: 'row',
  },
  variants: {
    listDirection: {
      row: 'flex-row [margin-left:-4rem]',
      column: 'flex-col [margin-top:-4rem] [width:calc(100% + .5rem)]',
    },
    isOpen: {
      true: 'opacity-100 visible',
    },
  },
})

export const shareButtonLinksList = tv({
  base: 'flex',
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

export const shareButtonLink = tv({
  base: 'flex items-center justify-center cursor-pointer bg-color-1-200 hover:bg-color-1-300 w-full text-color-1-500 rounded-none p-2',
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

export const shareButtonLinkButton = tv({
  base: '',
})
