import { tv } from 'tailwind-variants'

const typography = tv({
  variants: {
    size: {
      h1: `text-5xl`,
      h2: `text-4xl`,
      h3: `text-3xl`,
      h4: `text-2xl`,
      h5: `text-xl`,
      h6: `text-lg`,
      leading: `text-md font-bold leading-normal`,
      paragraph: `text-md inline`,
      footnotes: `text-sm`,
      xs: `text-xs`,
    },
    font: {
      body: `font-body`,
    },
    weight: {
      normal: `font-normal`,
      light: `font-light`,
      bold: 'font-bold',
    },
    color: {
      gray: `text-gray-500`,
    },
    isError: {
      true: 'text-sm text-error ml-8 py-3',
    },
  },
  defaultVariants: {
    size: 'paragraph',
    font: 'body',
  },
})

export default typography
