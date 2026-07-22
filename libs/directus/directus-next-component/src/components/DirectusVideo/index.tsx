import type { TDirectusVideoProps } from './interface'
import { Video } from '@okam/stack-ui'
import { getDirectusVideo } from '../../utils/getDirectusVideo'

function DirectusVideo(props: TDirectusVideoProps) {
  const fileProps = getDirectusVideo(props)

  if (fileProps == null)
    return null

  const { type } = fileProps

  return <Video {...fileProps} type={type ?? undefined} />
}

export default DirectusVideo
