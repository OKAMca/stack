import type { TLink } from '@okam/next-component'

export interface TLinkExample {
  linkProps: Omit<TLink, 'href'> & { href: string }
  /**
   * The href `useLink` is expected to return for these props.
   */
  expected: string
  /**
   * What the previous implementation returned, shown struck through when it
   * differed from `expected`.
   */
  before?: string
}
