import { Video } from '@okam/stack-ui'
import { getDirectusFile } from '../../utils/getDirectusFile'
import type { TDirectusVideoProps } from './interface'

const DirectusVideo = (props: TDirectusVideoProps) => {
  const { baseUrl } = props

  const fileProps = getDirectusFile(props, baseUrl)

  if (!fileProps) return null

  const { type } = fileProps

  return <Video {...fileProps} type={type ?? undefined} />
}

export default DirectusVideo
