import type { LinkProps as NextLinkProps } from 'next/link'
import type { ReadonlyURLSearchParams } from 'next/navigation'

export enum LocalePrefix {
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
  AsNeeded = 'as-needed',
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
  Always = 'always',
}

export type TLinkI18nConfig
  = ({
    defaultLocale: string
    /**
     * {@link LocalePrefix}
     */
    localePrefix: `${LocalePrefix.AsNeeded}`
  }
  | {
    defaultLocale?: string
    /**
     * {@link LocalePrefix}
     */
    localePrefix?: `${LocalePrefix.Always}` | undefined
  })

export interface TLink extends Omit<NextLinkProps, 'scroll' | 'as'> {
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
  /**
   * @deprecated Use `onNavigate` from next/link instead.
   */
  onPathnameChange?: (_pathname: string) => void
  onSearchParamsChange?: (_searchParams: ReadonlyURLSearchParams) => void
  onHashChange?: (_hash: string) => void
  i18n?: TLinkI18nConfig
}

export interface TUseLinkReturn extends Omit<NextLinkProps, 'href' | 'locale'> {
  href: string
}
