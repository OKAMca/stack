'use client'

import { directusImageLoader } from '@okam/directus-next'
import { DirectusImg } from '@okam/directus-next-component'
import { isEmpty } from 'radashi'

const protocol = process.env.NEXT_PUBLIC_IMG_PROTOCOL ?? 'http'
const domain = process.env.NEXT_PUBLIC_IMG_DOMAIN
const port = !isEmpty(process.env.NEXT_PUBLIC_IMG_PORT) ? `:${process.env.NEXT_PUBLIC_IMG_PORT}` : ''

export default function ClientPage({ id}: { id: string }) {
  const baseUrl = new URL(`${protocol}://${domain}${port}`)
  return (
    <div>
      <div className="relative w-125 h-125">
        <span>Default image</span>
        <DirectusImg loader={directusImageLoader} id={id} filename_download="image.png" width={1000} height={1000} />
      </div>
      <div className="relative w-125 h-125">
        <span>Fill</span>
        <DirectusImg loader={directusImageLoader} id={id} filename_download="image.png" fill fit="cover" />
      </div>
      <div className="relative w-125 h-125">
        <span>All props</span>
        <DirectusImg loader={directusImageLoader} id={id} filename_download="image.png" baseUrl={baseUrl} description="Image" filename_disk="filename_disk" caption="caption" embed="embed" fill fit="cover" focal_point_x={100} focal_point_y={100} focal_point_divider="focal_point_divider" location="location" storage="storage" tags="tags" type="type" />
      </div>
    </div>
  )
}
