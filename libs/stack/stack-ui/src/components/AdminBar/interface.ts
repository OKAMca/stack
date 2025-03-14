import type { ReactNode } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

/**
 * AdminBar Component Props
 *
 * The AdminBar is inspired by WordPress admin bar and provides a container for administrative controls.
 * Its visibility is driven by Next.js's draftMode cookie.
 *
 * @property {ReactNode} children - Optional content to render inside the AdminBar
 * @property {string} draftModeButtonLabel - Optional custom label for the draft mode button
 */
export interface AdminBarProps<T = TToken> extends TDefaultComponent<T> {
  children?: ReactNode
  draftModeButtonLabel?: string
}
