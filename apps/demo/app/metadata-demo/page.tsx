import type { TPageSettings, TFiles } from '@okam/directus-next'
import { useMetadata } from '@okam/directus-next-component'
import type { TMetadataOptions } from '@okam/directus-next-component'
import type { Nullable } from '@okam/stack-ui'
import type { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'
import Link from 'next/link'

// Mock page settings to simulate Directus data
const mockPageSettings: TPageSettings = {
  id: 'metadata-demo',
  belongs_to_collection: 'pages',
  belongs_to_key: 'metadata-demo',
  translations: [
    {
      title: 'Metadata Demo Page',
      meta_description: 'A demonstration of the useMetadata hook for Next.js pages',
      no_follow: false,
      no_index: false,
      og_image: {
        id: 'mock-image-id',
        title: 'Demo Image',
        description: 'A demo image for metadata',
      } as TFiles,
      languages_code: { code: 'en' },
      slug: 'metadata-demo',
      path: '/metadata-demo',
    },
  ],
}

// Metadata options configuration
const metadataOptions: TMetadataOptions = {
  ogImageMaxWidth: 1200,
  ogImageMaxHeight: 630,
  imageLoader: ({ src, width, height }: { src: string; width?: string | number; height?: string | number }) => {
    // Simple example of an image loader
    const params = new URLSearchParams()
    if (width) params.set('width', width.toString())
    if (height) params.set('height', height.toString())
    const queryParams = params.toString()
    return queryParams ? `${src}?${queryParams}` : src
  },
  getFilesFragment: <T extends { _typename: 'directus_files' }>(file: Nullable<T>) => {
    if (!file) return null
    // In a real-world scenario, this would extract the file data from the Directus response
    return {
      id: 'mock-image-id',
      title: 'Demo Image',
      description: 'A demo image for metadata',
      type: 'image/png',
      width: 1200,
      height: 630,
      src: '/images/metadata-fallback.png',
    }
  },
  createAlternateUrls: (pageSettings: Nullable<TPageSettings>) => {
    // Create alternate URLs for different languages
    if (!pageSettings?.translations?.length) return {}
    const { translations } = pageSettings
    // Only include languages with valid codes
    const languages = translations
      .map((t) => t?.languages_code?.code)
      .filter((code): code is string => typeof code === 'string')
    const alternates = {
      canonical: new URL(`https://example.com/metadata-demo`),
      languages: {} as Record<string, string>,
    }
    languages.forEach((lang) => {
      const translation = translations.find((t) => t?.languages_code?.code === lang)
      if (translation) {
        alternates.languages[lang] = `https://example.com/${lang}/metadata-demo`
      }
    })
    return alternates
  },
  openGraphTypeConfig: {
    pages: 'website',
    articles: 'article',
    products: 'website', // Changed to a valid OpenGraphType
  } as Record<string, OpenGraphType>,
  getHostname: () => 'https://example.com',
}

export default function MetadataDemo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Metadata Hook Demo</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Page</h2>
            <p className="text-gray-700 mb-4">
              This page demonstrates how to use the <code>useMetadata</code> hook to generate dynamic metadata for your
              Next.js pages based on Directus data.
            </p>
            <p className="text-gray-700 mb-4">
              The metadata for this page is generated dynamically using mock data to simulate how real Directus page
              settings would be used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-700 mb-4">
              The <code>useMetadata</code> hook takes three parameters:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="text-gray-700 mb-2">
                <strong>pageProps</strong>: An object containing a <code>pageSettings</code> property with Directus page
                data
              </li>
              <li className="text-gray-700 mb-2">
                <strong>options</strong>: Configuration for metadata generation (see code for details)
              </li>
              <li className="text-gray-700 mb-2">
                <strong>defaultProps</strong>: Optional default values for metadata fields
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              The hook returns a Next.js <code>Metadata</code> object that can be used directly with the{' '}
              <code>generateMetadata</code> export function.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Generated Metadata</h2>
            <p className="text-gray-700 mb-4">This page includes the following metadata:</p>
            <ul className="list-disc pl-8 mb-4">
              <li className="text-gray-700 mb-2">
                <strong>Title</strong>: Metadata Demo Page
              </li>
              <li className="text-gray-700 mb-2">
                <strong>Description</strong>: A demonstration of the useMetadata hook for Next.js pages
              </li>
              <li className="text-gray-700 mb-2">
                <strong>Open Graph</strong>: Image, title, description, type
              </li>
              <li className="text-gray-700 mb-2">
                <strong>Twitter</strong>: Image, title, description
              </li>
              <li className="text-gray-700 mb-2">
                <strong>Alternate URLs</strong>: For language variants
              </li>
            </ul>
            <p className="text-gray-700">Inspect the page source to see the generated metadata in action.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Implementation Example</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <code className="block whitespace-pre-wrap text-sm">
                {`// Add to your Next.js page
import { useMetadata } from '@okam/directus-next-component'

// Configure your metadata options
const metadataOptions = {
  ogFallbackImage: fallbackImage,
  ogImageMaxWidth: 1200,
  ogImageMaxHeight: 630,
  imageLoader: ({ src, width, height }) => {
    // Your image loader logic
    return src
  },
  getFilesFragment: (file) => {
    // Extract file data from Directus
    return file ? { /* file properties */ } : null
  },
  createAlternateUrls: (pageSettings) => {
    // Create alternate URLs logic
    return { canonical: new URL('https://example.com') }
  },
  openGraphTypeConfig: {
    pages: 'website',
    articles: 'article',
  },
  getHostname: () => 'https://example.com',
}

// Use in Next.js generateMetadata
export async function generateMetadata() {
  const pageProps = await fetchPageData() // Your data fetching
  return await useMetadata(pageProps, metadataOptions)
}`}
              </code>
            </div>
          </section>

          <div className="flex justify-between items-center mt-8">
            <Link href="/" className="text-blue-500 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// We need to use the Next.js metadata API to generate metadata
export async function generateMetadata() {
  const pageProps = { pageSettings: mockPageSettings }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const metadata = await useMetadata(pageProps, metadataOptions)
  return metadata
}
