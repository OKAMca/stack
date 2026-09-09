import type { TLinkExample } from './interface'
import { Box, Typography } from '@okam/stack-ui'
import { LinkExample } from './LinkExample'

const INTERNAL_EXAMPLES: TLinkExample[] = [
  { linkProps: { href: '/about', locale: 'fr' }, expected: '/fr/about/' },
  { linkProps: { href: '/about/', locale: 'fr' }, expected: '/fr/about/' },
  { linkProps: { href: '/a?b=1#c', locale: 'fr' }, expected: '/fr/a/?b=1#c' },
  { linkProps: { href: '#section', locale: 'fr' }, expected: '#section' },
  { linkProps: { href: '/about', locale: false }, expected: '/about/' },
]

const OPT_OUT_EXAMPLES: TLinkExample[] = [
  { linkProps: { href: '/about', locale: 'fr', trailingSlash: false }, expected: '/fr/about' },
  { linkProps: { href: '/about/', locale: 'fr', trailingSlash: false }, expected: '/fr/about/' },
  { linkProps: { href: '/a?b=1#c', locale: 'fr', trailingSlash: false }, expected: '/fr/a?b=1#c' },
  { linkProps: { href: '#section', locale: 'fr', trailingSlash: false }, expected: '#section' },
]

const EXTERNAL_EXAMPLES: TLinkExample[] = [
  {
    linkProps: { href: 'https://example.com/page', locale: 'fr' },
    expected: 'https://example.com/page',
    before: 'https://example.com/page/',
  },
  {
    linkProps: { href: 'https://example.com/report.pdf', locale: 'fr' },
    expected: 'https://example.com/report.pdf',
    before: 'https://example.com/report.pdf/',
  },
  {
    linkProps: { href: 'https://example.com/a?b=1#c', locale: 'fr' },
    expected: 'https://example.com/a?b=1#c',
    before: 'https://example.com/a/?b=1#c',
  },
  {
    linkProps: { href: 'https://EXAMPLE.com/Path', locale: 'fr' },
    expected: 'https://EXAMPLE.com/Path',
    before: 'https://example.com/Path/',
  },
  {
    linkProps: { href: '//cdn.example.com/a.js', locale: 'fr' },
    expected: '//cdn.example.com/a.js',
    before: '//cdn.example.com/a.js/',
  },
  {
    linkProps: { href: 'mailto:hello@okam.ca', locale: 'fr' },
    expected: 'mailto:hello@okam.ca',
    before: '/frmailto:hello@okam.ca/',
  },
  {
    linkProps: { href: 'tel:+15145551234', locale: 'fr' },
    expected: 'tel:+15145551234',
    before: '/frtel:+15145551234/',
  },
  {
    linkProps: { href: 'https://www.crave.ca/en/ctv', locale: 'fr', trailingSlash: true },
    expected: 'https://www.crave.ca/en/ctv',
    before: 'https://www.crave.ca/en/ctv/',
  },
]

function ExampleTable(props: { title: string, description: string, examples: TLinkExample[] }) {
  const { title, description, examples } = props

  return (
    <Box customTheme="flex flex-col gap-2">
      <Typography tokens={{ size: 'h2' }}>{title}</Typography>
      <Typography tokens={{ size: 'p' }}>{description}</Typography>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400 text-xs uppercase tracking-wide">
              <th className="p-3">Props</th>
              <th className="p-3">Rendered link</th>
              <th className="p-3">useLink href</th>
              <th className="p-3">href in the DOM</th>
              <th className="p-3">Expected</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {examples.map(example => (
              <LinkExample
                key={`${example.linkProps.href}-${example.linkProps.locale}-${example.linkProps.trailingSlash}`}
                {...example}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  )
}

export default async function Page(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params

  const contextLocaleExamples: TLinkExample[] = [
    { linkProps: { href: '/about' }, expected: `/${locale}/about/` },
    { linkProps: { href: '/about', trailingSlash: false }, expected: `/${locale}/about` },
    { linkProps: { href: 'https://example.com/page' }, expected: 'https://example.com/page' },
  ]

  return (
    <Box customTheme="flex flex-col gap-12 p-8">
      <Box customTheme="flex flex-col gap-2">
        <Typography tokens={{ size: 'h1' }}>Link trailing slash</Typography>
        <Typography tokens={{ size: 'p' }}>
          A trailing slash is appended to the pathname of internal hrefs only. External hrefs are rendered verbatim,
          whatever `trailingSlash` is set to. Struck-through values are what the previous implementation returned.
        </Typography>
      </Box>

      <ExampleTable
        title="Internal hrefs"
        description="Default behaviour: the locale is prepended and the pathname gets a trailing slash."
        examples={INTERNAL_EXAMPLES}
      />

      <ExampleTable
        title="Internal hrefs, trailingSlash={false}"
        description="For apps that are not served with Next's `trailingSlash: true`."
        examples={OPT_OUT_EXAMPLES}
      />

      <ExampleTable
        title="External hrefs"
        description="Never slashed, never locale-prefixed, never case-normalized. The last row is the reported bellmedia case."
        examples={EXTERNAL_EXAMPLES}
      />

      <ExampleTable
        title="Locale from the URL"
        description={`No locale prop, so the locale comes from the I18nProvider of this page's [locale] segment (currently "${locale}").`}
        examples={contextLocaleExamples}
      />
    </Box>
  )
}
