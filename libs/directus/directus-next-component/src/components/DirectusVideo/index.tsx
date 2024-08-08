import { Video } from '@okam/stack-ui'
import useDirectusFile from '../../hooks/directus-file'
import type { TDirectusVideoProps } from './interface'

const DirectusVideo = (props: TDirectusVideoProps) => {
  const { baseUrl } = props

  const fileProps = useDirectusFile(props, baseUrl)

  if (!fileProps) return null

  const { type } = fileProps

  return <Video {...fileProps} type={type ?? undefined} />
}

export default DirectusVideo
