import { tv } from 'tailwind-variants'

const button = tv({
  base: `
    flex
    items-center
    justify-center
    gap-4
    transition
    duration-300
    ease-in-out
    disabled:pointer-events-none
    disabled:opacity-30
    focus:outline-0
    border-transparent 
    border-2
    focus:border-black
  `,
  defaultVariants: {
    buttonStyle: 'default',
    type: 'button',
    size: 'default',
    shape: 'rounded',
  },
  variants: {
    buttonStyle: {
      default: `
            px-4
            py-2
            text-white
            !bg-color-1-500 
            hover:!bg-color-1-400
            active:!bg-color-1-400
          `,
      outline: `
            px-4
            py-2
            bg-transparent
            !border-color-1-500
            text-color-1-500
            hover:bg-color-1-500
            hover:text-white
            active:bg-color-1-500
            active:text-white
          `,
      hollow: `
            px-2
            bg-transparent
            text-color-1-500
            hover:border-b-color-1-500
            active:border-b-color-1-500
            focus:border-b-color-1-500
    
          `,
    },
    intent: {
      error: `
            !bg-error 
            text-white 
            pointer-events-none
            !border-error
          `,
    },
    size: {
      default: `min-w-12 min-h-6`,
      large: `min-w-36 min-h-18`,
    },
    shape: {
      rounded: `rounded-md`,
      circular: `rounded-full`,
    },
  },
})

export default button
