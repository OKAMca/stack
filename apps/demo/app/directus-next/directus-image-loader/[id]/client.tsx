'use client'

import { directusImageLoader } from '@okam/directus-next'
import { DirectusImg } from '@okam/directus-next-component'

export default function ClientPage({ id}: { id: string }) {
  return (
    <div>
      <div className="relative w-125 h-125">
        <span>Default image</span>
        <DirectusImg loader={directusImageLoader} id={id} filename_download="Ligue-Frisbee.png" width={1000} height={1000} />
      </div>
      <div className="relative w-125 h-125">
        <span>Fill</span>
        <DirectusImg loader={directusImageLoader} id={id} filename_download="Ligue-Frisbee.png" fill fit="cover" />
      </div>
    </div>
  )
}
