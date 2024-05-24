import { tv } from 'tailwind-variants'
import type { TToken } from '../../providers/Theme/interface'

export const accordionContainer = tv({
  base: '[border-radius: 32px] p-1.5 focus:outline-none text-color-1-500',
  defaultVariants: {
    textAlign: 'left',
    isOpen: false,
  },
  variants: {
    textAlign: {
      center: 'text-center',
      left: 'text-left',
    },
  },
})

export const accordionButton = tv({
  base: 'grid overflow-hidden w-full items-center border-b-2 border-color-1-500 focus-ring-black',
  variants: {
    titleBold: {
      true: 'font-bold',
    },
    textAlign: {
      center: 'grid-cols-[3rem_1fr_3rem] pl-0 sm:pl-0',
      left: 'grid-cols-[1fr_3rem]',
    },
    bgColor: {
      gray: 'bg-red-300',
      white: 'bg-white',
    },
  },
  defaultVariants: {
    titleBold: false,
    textAlign: 'left',
    bgColor: 'white',
  },
})

export const accordionTitle = tv({
  base: '',
  defaultVariants: {
    textAlign: 'left',
  },
  variants: {
    textAlign: {
      center: 'justify-self-center col-start-2',
      left: 'justify-self-start',
    },
  },
})

export const accordionIcon = tv({
  base: 'text-color-1-500 min-h-12 rotate-90 min-w-12 rounded-full flex items-center justify-center transition duration-500 transform ml-auto aspect-square',
  variants: {
    isOpen: {
      true: '-rotate-90',
      false: '',
    },
  },
})

export const accordionRegion = tv({
  base: `
    font-body 
    text-inherit
    h-auto
    grid
  `,
  defaultVariants: {
    textAlign: 'left',
  },
  variants: {
    textAlign: {
      center: 'grid-cols-[3rem_1fr_3rem] px-6 text-center',
      left: 'grid-cols-[1fr_3rem] text-left',
    },
  },
})

export const accordionContent = tv({
  base: 'overflow-hidden flex flex-col gap-2 items-start',
  defaultVariants: {
    textAlign: 'left',
  },
  variants: {
    textAlign: {
      center: 'col-start-2',
      left: '',
    },
  },
})

export const accordionTheme = {
  container: (props: TToken) => accordionContainer(props),
  button: (props: TToken) => accordionButton(props),
  title: (props: TToken) => accordionTitle(props),
  icon: (props: TToken) => accordionIcon(props),
  region: (props: TToken) => accordionRegion(props),
  content: (props: TToken) => accordionContent(props),
}
