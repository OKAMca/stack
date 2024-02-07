import { tv } from 'tailwind-variants'

export const carouselContainer = tv({
  base: 'flex justify-between items-center relative h-[475px] mb-18 lg:h-[650px]',
})

export const carouselSlideContainer = tv({
  base: 'flex justify-center m-auto px-8 w-full h-full',
})

export const carouselNavigationButtons = tv({
  base: 'bg-color-1-500 rounded-full p-4 text-white',
})
