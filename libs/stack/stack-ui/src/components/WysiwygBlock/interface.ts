import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

interface TWysiwygBlockProps<Tags extends string = string, T = TToken> extends TDefaultComponent<T> {
  content: string
  useSanitizerDefaultAllowedTags?: boolean
  useSanitizerDefaultAllowedAttributes?: boolean
  allowedTags?: Tags[]
  allowedAttributes?: {
    [_K in Tags]?: string[]
  }
}
export default TWysiwygBlockProps
