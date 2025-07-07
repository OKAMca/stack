import type { StaticImageData } from 'next/image'

// Create a mock StaticImageData object for our metadata demo
// In a real project, you would import an actual image
const metadataFallbackImage: StaticImageData = {
  src: '/images/metadata-fallback.png',
  height: 630,
  width: 1200,
}

export default metadataFallbackImage
