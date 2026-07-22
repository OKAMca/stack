import type { TDirectusVideoProps } from './interface'
import { Video } from '@okam/stack-ui'
import { isNullish, omit } from 'radashi'
import { getDirectusVideo } from '../../utils/getDirectusVideo'

function DirectusVideo(props: TDirectusVideoProps) {
  const fileProps = getDirectusVideo(props)

  if (isNullish(fileProps))
    return null

  const { type } = fileProps

  return <Video {...omit(fileProps, ['filenameDownload', 'duration', 'caption', 'embed', 'filename_disk', 'filename_download', 'focal_point_divider', 'focal_point_x', 'focal_point_y', 'location', 'storage', 'tags', 'thumbhash'])} type={type ?? undefined} />
}

export default DirectusVideo
