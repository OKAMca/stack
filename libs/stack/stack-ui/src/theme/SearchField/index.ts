import type { TToken } from '@okam/stack-ui'
import { tv } from 'tailwind-variants'
import typography from '../Typography'

const wrapper = tv({
  base: `min-w-fit sm:w-80 w-full`,
})

const label = tv({})

const container = tv({
  base: `relative focus-within:outline focus-within:outline-tertiary focus-within:outline-2 rounded-full`,
})

const input = tv({
  base: 'outline-offset-0 search-cancel:appearance-none',
})

const icon = tv({
  base: `
    p-4
    box-border 
    absolute 
    right-0 
    h-full 
    focus-ring-tertiary
    has-focus-ring:outline-offset-[-5px]
    has-focus:outline-none
  `,
})

const searchTheme = {
  wrapper: (props: TToken) => wrapper(props),
  label: (props: TToken) => label(props),
  container: (props: TToken) => container(props),
  input: (props: TToken) => input(props),
  errorMessage: (props: TToken) => typography({ ...props, isError: true, size: 'xs' }),
  icon: (props: TToken) => icon(props),
}

export default searchTheme
