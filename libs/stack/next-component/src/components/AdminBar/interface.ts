import type { TDefaultComponent, TToken } from '@okam/stack-ui'
import type { ReactNode } from 'react'

/**
 * AdminBar Component Props
 *
 * The AdminBar is inspired by WordPress admin bar and provides a container for administrative controls.
 * Its visibility is driven by Next.js's draftMode cookie.
 *
 * @property {ReactNode} children - Content to render inside the AdminBar. Put the DraftMode component inside the children.
 */
export interface TAdminBarProps<T = TToken> extends TDefaultComponent<T> {
  children: ReactNode
}
