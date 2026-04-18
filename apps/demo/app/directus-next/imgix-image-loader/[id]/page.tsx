import { DirectusImg } from '@okam/directus-next-component'

export default async function Page({ params}: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div>
      <div className="relative">
        <span>Default image</span>
        <DirectusImg id={id} filename_download="Ligue-Frisbee.png" width={1000} height={1000} />
      </div>
      <div className="relative w-125 h-125">
        <span>Focal point</span>
        <DirectusImg id={id} filename_download="Ligue-Frisbee.png" width={1000} height={1000} focal_point_x={1000} focal_point_y={1000} fit="cover" />
      </div>
      <div className="relative w-125 h-125">
        <span>Fill</span>
        <DirectusImg id={id} filename_download="Ligue-Frisbee.png" fill fit="cover" />
      </div>
    </div>
  )
}
