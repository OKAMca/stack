import type { LinkProps as NextLinkProps } from 'next/link'
import type { UrlObject } from 'node:url'
import type { FocusEventHandler, PointerEventHandler } from 'react'

export const LocalePrefix = {
  /**
   * The pathname will be prefixed with the locale only when it is not the default locale
   *
   * @example
   * ```ts
   * const linkI18nConfig = {
   *   localePrefix: 'as-needed',
   *   defaultLocale: 'en',
   * }
   *
   * // <Link locale="en" href="/products/1" />
   * // output: /products/1
   *
   * // <Link href="/products/1" />
   * // output: /products/1
   *
   * // <Link locale="fr" href="/produits/1" />
   * // output: /fr/produits/1
   * ```
   */
  AsNeeded: 'as-needed',
  /**
   * The pathname will always be prefixed by the locale
   *
   * @example
   * ```ts
   * const linkI18nConfig = {
   *   localePrefix: 'always',
   *   defaultLocale: 'en',
   * }
   *
   * // <Link locale="en" href="/products/1" />
   * // output: /en/products/1
   *
   * // <Link href="/products/1" />
   * // output: /en/products/1
   *
   * // <Link locale="fr" href="/produits/1" />
   * // output: /fr/produits/1
   * ```
   */
  Always: 'always',
} as const

export type TLinkI18nConfig
  = ({
    defaultLocale: string
    /**
     * {@link LocalePrefix}
     */
    localePrefix: `${typeof LocalePrefix.AsNeeded}`
  }
  | {
    defaultLocale?: string
    /**
     * {@link LocalePrefix}
     */
    localePrefix?: `${typeof LocalePrefix.Always}` | undefined
  })

export interface TLink extends Omit<NextLinkProps, 'scroll' | 'as' | 'href' | 'prefetch'> {
  href: string | UrlObject
  /**
   * Every next/link `prefetch` value is passed through unchanged, plus `'intent'`.
   *
   * - `'intent'`: renders next/link with `prefetch={false}` until the user shows intent on the link
   *   (`pointerenter`, `touchstart` or `focus`), then switches to `prefetch={null}` (the Next default)
   *   so Next prefetches it. next/link has no hover-only mode: `prefetch={false}` disables
   *   both the viewport and the hover prefetch. Has no effect with `legacyBehavior`, where next/link
   *   does not forward the intent handlers.
   *
   * @default null
   */
  prefetch?: NextLinkProps['prefetch'] | 'intent'
  onPointerEnter?: PointerEventHandler<HTMLAnchorElement>
  onFocus?: FocusEventHandler<HTMLAnchorElement>
  /**
   * @default true
   * - `true`: Scrolls to the top of the clicked anchor (default Next.js behavior)
   * - `false`: Prevents any automatic scrolling
   * - `'top'`: Always scrolls to the top of the page, regardless of anchor
   */
  scroll?: 'top' | boolean
  urlDecorator?: NextLinkProps['as']
  /**
   * Used for the automatic scroll when `scroll = 'top'`
   * @default instant
   */
  behavior?: ScrollBehavior
  i18n?: TLinkI18nConfig
  /**
   * Whether a trailing slash is appended to the pathname of **internal** hrefs.
   * Set it to `false` when the app is not served with Next's `trailingSlash: true`.
   *
   * External hrefs are always left verbatim, whatever this is set to.
   *
   * @default true
   *
   * @example
   * ```ts
   * // <Link href="/products/1" locale="fr" />
   * // output: /fr/products/1/
   *
   * // <Link href="/products/1" locale="fr" trailingSlash={false} />
   * // output: /fr/products/1
   *
   * // <Link href="https://example.com/page" trailingSlash />
   * // output: https://example.com/page
   * ```
   */
  trailingSlash?: boolean
}

export interface TUseLinkReturn extends Omit<NextLinkProps, 'href' | 'locale'> {
  href: string
  onPointerEnter?: PointerEventHandler<HTMLAnchorElement>
  onFocus?: FocusEventHandler<HTMLAnchorElement>
}
