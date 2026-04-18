'use client'

import { DirectusImg } from '@okam/directus-next-component'

export default function Page() {
  return (
    <div>
      <div>
        <span>Imgix Directus image</span>
        {/* Test pointing to CEPSUM imgix, set your NEXT_PUBLIC_IMGIX_SUBDOMAIN appropriately */}
        <DirectusImg id="5694678c-08bc-4c8c-87ca-d5cf84010b14" filename_download="Ligue-Frisbee.png" width={1000} height={1000} focal_point_x={100} focal_point_y={100} fit="cover" />
      </div>
      <div>
        <span>Directus image</span>
        {/* Set this to a local directus image id for testing */}
        <DirectusImg id="3ac9a176-fb77-4951-b7a7-0624ac1bd2e9" width={300} height={1000} fit="cover" customTheme="w-[300px] h-[1000px]" />
      </div>
    </div>
  )
}
