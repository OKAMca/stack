import type { BlockSettingsFragment } from '../../generated/graphql'

export type BlockWysiwygFragment = {
  __typename?: 'block_wysiwyg'
  title?: string | null
  content?: string | null
  level?: string | null
  variant?: string | null
  settings?:
    | ({ __typename?: 'block_settings' } & { ' $fragmentRefs'?: { BlockSettingsFragment: BlockSettingsFragment } })
    | null
  // eslint-disable-next-line @typescript-eslint/naming-convention
} & { ' $fragmentName'?: 'BlockWysiwygFragment' }
