import type { TShareButtonProps } from '../../components/ShareButton/interface'
import { useCopyToClipboard } from 'usehooks-ts'
import LinkedIn from '../../components/icons/LinkedIn'
import { ShareButton } from '../../components/ShareButton'
import { Typography } from '../../components/Typography'

function ShareButtonExample(props: TShareButtonProps) {
  const { tokens } = props
  const [value, copy] = useCopyToClipboard()
  return (
    <>
      <ShareButton
        id="share-buttons"
        ariaLabel="Share"
        tokens={tokens}
        sharingLinksList={[
          {
            ariaLabel: 'Share on Facebook',
            icon: 'FacebookRounded',
            key: 'facebook',
            href: '#',
          },
          {
            ariaLabel: 'Share on Twitter',
            icon: 'Twitter',
            key: 'twitter',
            href: '#',
          },
          {
            ariaLabel: 'Share on Instagram',
            icon: 'Instagram',
            key: 'instagram',
            href: '#',
          },
          {
            ariaLabel: 'Share on YouTube',
            icon: 'YouTube',
            key: 'youtube',
            href: '#',
          },
          {
            ariaLabel: 'Share on X',
            icon: 'X',
            key: 'x',
            href: '#',
          },
          {
            ariaLabel: 'Share on LinkedIn',
            icon: <LinkedIn />,
            key: 'linkedin',
            href: '#',
          },
          {
            ariaLabel: 'Copy to clipboard',
            icon: 'ArrowDown',
            key: 'copy',
            onClick: linkKey => void copy(linkKey),
          },
        ]}
      />
      <Typography>{(value != null && value !== '') ? `Copied value: ${value}` : 'Nothing copied yet!'}</Typography>
    </>
  )
}

export default ShareButtonExample
