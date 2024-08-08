import directusFileConfig from './config'
import type { TDirectusFileProps } from './interface'

const DirectusFile = (props: TDirectusFileProps) => {
  const { type, ...rest } = props

  const fileType = type?.split('/')?.[0]
  const configComponent = directusFileConfig[fileType ?? '']

  const { as: Component = configComponent } = props

  if (!Component) return null

  return <Component {...rest} />
}

export default DirectusFile
