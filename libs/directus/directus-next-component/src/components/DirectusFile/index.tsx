import directusFileConfig from './config'
import type { DirectusFileProps } from './interface'

const DirectusFile = (props: DirectusFileProps) => {
  const { type, ...rest } = props

  const fileType = type?.split('/')?.[0]
  const configComponent = directusFileConfig[fileType ?? '']

  const { as: Component = configComponent } = props

  if (!Component) return null

  return <Component {...rest} />
}

export default DirectusFile
