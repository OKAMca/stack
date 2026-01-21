import type { TDirectusFileProps } from './interface'
import directusFileConfig from './config'

function DirectusFile(props: TDirectusFileProps) {
  const { type, ...rest } = props

  const fileType = type?.split('/')?.[0]
  const configComponent = directusFileConfig[fileType ?? '']

  const { as: Component = configComponent } = props

  if (Component == null)
    return null

  return <Component {...rest} />
}

export default DirectusFile
