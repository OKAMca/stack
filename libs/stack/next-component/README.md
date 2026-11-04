# next-component

## Link hrefs and locales

`<Link>` takes locale-relative hrefs such as `/services`. The `locale` prop or
react-aria's `I18nProvider` supplies the locale. `i18n.localePrefix` controls
whether to prefix every locale (`always`, the default) or omit the default
locale (`as-needed`, with `i18n.defaultLocale`).

Set `i18n.locales` to the app's supported URL locales. An href that already
starts with one of these locales keeps that prefix, even if it differs from
the selected locale or is the default locale in `as-needed` mode. The explicit
locale wins. Matching uses exact path segments and the configured case:
`/fr` and `/fr/services` match `fr`; `/french`, `/fr-ca`, and `/FR` do not.
Without `i18n.locales`, only the selected locale is recognized.

```tsx
const i18n = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
} satisfies TLinkI18nConfig
```

```tsx
<>
  <Link href="/services" locale="fr" i18n={i18n} /> {/* /fr/services/ */}
  <Link href="/fr/services" locale="fr" i18n={i18n} /> {/* /fr/services/ */}
  <Link href="/en/services" locale="fr" i18n={i18n} /> {/* /en/services/ */}
  <Link href="/services" locale="en" i18n={i18n} /> {/* /services/ */}
</>
```

Internal paths still receive a trailing slash unless `trailingSlash={false}`.
Anchors, absolute URLs, protocol-relative URLs, `mailto:` and `tel:` hrefs are
kept unchanged. `locale={false}` disables automatic
prefixing.

## Running unit tests

Run `nx test next-component` to execute the unit tests via [Vitest](https://vitest.dev/).
