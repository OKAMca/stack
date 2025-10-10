import { useCopyToClipboard } from 'usehooks-ts'
import LinkedIn from '../../components/icons/LinkedIn'
import ShareButton from '../../components/ShareButton'
import type { TShareButtonProps } from '../../components/ShareButton/interface'
import Typography from '../../components/Typography'

const ShareButtonExample = (props: TShareButtonProps) => {
  const { tokens } = props
  const [value, copy] = useCopyToClipboard()
  return (
    <>
      <ShareButton
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
            onClick: (linkKey) => copy(linkKey),
          },
        ]}
      />
      <Typography>{value ? `Copied value: ${value}` : 'Nothing copied yet!'}</Typography>
    </>
  )
}

export default ShareButtonExample
