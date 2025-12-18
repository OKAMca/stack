import { Video } from '@okam/stack-ui'
import { directusFile } from '../../utils/directusFile'
import type { TDirectusVideoProps } from './interface'

const DirectusVideo = (props: TDirectusVideoProps) => {
  const { baseUrl } = props

  const fileProps = directusFile(props, baseUrl)

  if (!fileProps) return null

  const { type } = fileProps

  return <Video {...fileProps} type={type ?? undefined} />
}

export default DirectusVideo
