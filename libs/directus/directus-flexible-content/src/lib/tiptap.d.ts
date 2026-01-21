import type { ReactNode } from 'react'
import type { RelationBlockProps } from '../types'

/**
 * Extend Tiptap's NodeConfig and MarkConfig types with custom `render` property
 * used by the directus-flexible-content rendering system.
 */
declare module '@tiptap/core' {
  interface NodeConfig<Options = unknown, Storage = unknown> {
    /**
     * Custom render function for directus-flexible-content serializers.
     * Used to render relation blocks as React components.
     */
    render?: (block: RelationBlockProps) => ReactNode
  }

  interface MarkConfig<Options = unknown, Storage = unknown> {
    /**
     * Custom render function for directus-flexible-content serializers.
     * Used to render relation marks as React components.
     */
    render?: (block: RelationBlockProps) => ReactNode
  }
}
