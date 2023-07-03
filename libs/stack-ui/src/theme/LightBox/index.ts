import { tv } from 'tailwind-variants'

export const lightBoxContainer = tv({
  base: ` w-screen h-screen relative flex items-center m-auto justify-center`,
})

export const lightBoxCloseBtn = tv({
  base: `absolute xl:top-10 xl:right-20 lg:top-8 lg:right-8 z-10 top-4 right-4 w-[2.5rem]
    h-[2.5rem]`,
})
