import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

interface TWysiwygBlockProps<T = TToken> extends TDefaultComponent<T> {
  content: string
}

export default TWysiwygBlockProps
