import type { TDirectusVideoProps } from './interface'
import { Video } from '@okam/stack-ui'
import { getDirectusFile } from '../../utils/getDirectusFile'

function DirectusVideo(props: TDirectusVideoProps) {
  const { baseUrl } = props

  const fileProps = getDirectusFile(props, baseUrl)

  if (fileProps == null)
    return null

  const { type } = fileProps

  return <Video {...fileProps} type={type ?? undefined} />
}

export default DirectusVideo
