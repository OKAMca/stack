import type { ReactNode } from 'react'
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ShareButton } from '..'
import ThemeProvider from '../../../theme'

const shareLabel = 'Share the press release'

const sharingLinksList = [
  { ariaLabel: 'Share on X', key: 'x', href: 'https://x.test/intent' },
  { ariaLabel: 'Share on LinkedIn', key: 'linkedin', href: 'https://linkedin.test/share' },
  { ariaLabel: 'Share on Facebook', key: 'facebook', href: 'https://facebook.test/share' },
]

function withTheme(children: ReactNode) {
  return <ThemeProvider>{children}</ThemeProvider>
}

function renderShareButton(props: Partial<Parameters<typeof ShareButton>[0]> = {}) {
  return render(withTheme(
    <ShareButton
      id="share-buttons"
      ariaLabel={shareLabel}
      sharingLinksList={sharingLinksList}
      tokens={{ listDirection: 'column' }}
      {...props}
    />,
  ))
}

function getTrigger() {
  return screen.getByRole('button', { name: shareLabel })
}

function expectFocused(element: HTMLElement) {
  expect(document.activeElement).toBe(element)
}

async function openMenu() {
  renderShareButton()
  fireEvent.click(getTrigger())
  await waitFor(() => expectFocused(screen.getByRole('link', { name: 'Share on X' })))
}

afterEach(() => {
  cleanup()
})

describe('shareButton', () => {
  it('starts closed, with a named trigger that announces neither a listbox nor a panel', () => {
    renderShareButton()

    expect(getTrigger().getAttribute('aria-expanded')).toBe('false')
    expect(getTrigger().hasAttribute('aria-haspopup')).toBe(false)
    expect(getTrigger().hasAttribute('aria-controls')).toBe(false)
    expect(screen.queryByRole('group')).toBeNull()
  })

  it('opens a named group of links instead of an unnamed listbox of options', async () => {
    await openMenu()

    const group = screen.getByRole('group', { name: shareLabel })
    expect(group.contains(screen.getByRole('link', { name: 'Share on X' }))).toBe(true)
    expect(screen.getAllByRole('link')).toHaveLength(3)
    expect(screen.queryByRole('listbox')).toBeNull()
    expect(screen.queryByRole('option')).toBeNull()
  })

  it('follows the disclosure pattern on the trigger while open', async () => {
    await openMenu()

    expect(getTrigger().getAttribute('aria-expanded')).toBe('true')
    expect(getTrigger().getAttribute('aria-controls')).toBe(screen.getByRole('group').id)
    expect(getTrigger().hasAttribute('aria-haspopup')).toBe(false)
  })

  it('opens each link in a new tab without handing over the opener', async () => {
    await openMenu()

    const link = screen.getByRole('link', { name: 'Share on LinkedIn' })
    expect(link.getAttribute('href')).toBe('https://linkedin.test/share')
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
  })

  it('reports which link was pressed', async () => {
    const onShare = vi.fn()
    const onClick = vi.fn()
    renderShareButton({ onShare, sharingLinksList: [{ ariaLabel: 'Share on X', key: 'x', href: 'https://x.test/intent', onClick }] })
    fireEvent.click(getTrigger())

    fireEvent.click(await screen.findByRole('link', { name: 'Share on X' }))

    expect(onShare).toHaveBeenCalledWith('x')
    expect(onClick).toHaveBeenCalledWith('x')
  })

  it('closes on Escape and hands the focus back to the trigger', async () => {
    await openMenu()

    fireEvent.keyDown(screen.getByRole('link', { name: 'Share on X' }), { key: 'Escape' })

    await waitFor(() => expect(screen.queryByRole('group')).toBeNull())
    expect(getTrigger().getAttribute('aria-expanded')).toBe('false')
    await waitFor(() => expectFocused(getTrigger()))
  })

  it('moves between the trigger and the links with the arrow keys of its direction', async () => {
    await openMenu()

    fireEvent.keyDown(screen.getByRole('link', { name: 'Share on X' }), { key: 'ArrowDown' })
    expectFocused(screen.getByRole('link', { name: 'Share on LinkedIn' }))

    fireEvent.keyDown(screen.getByRole('link', { name: 'Share on LinkedIn' }), { key: 'ArrowUp' })
    expectFocused(screen.getByRole('link', { name: 'Share on X' }))

    act(() => getTrigger().focus())
    fireEvent.keyDown(getTrigger(), { key: 'ArrowUp' })
    expectFocused(screen.getByRole('link', { name: 'Share on Facebook' }))

    act(() => getTrigger().focus())
    fireEvent.keyDown(getTrigger(), { key: 'ArrowDown' })
    expectFocused(screen.getByRole('link', { name: 'Share on X' }))
  })

  it('moves along a row with the left and right arrow keys', async () => {
    renderShareButton({ tokens: { listDirection: 'row' } })
    fireEvent.click(getTrigger())
    await waitFor(() => expectFocused(screen.getByRole('link', { name: 'Share on X' })))

    fireEvent.keyDown(screen.getByRole('link', { name: 'Share on X' }), { key: 'ArrowRight' })
    expectFocused(screen.getByRole('link', { name: 'Share on LinkedIn' }))

    fireEvent.keyDown(screen.getByRole('link', { name: 'Share on LinkedIn' }), { key: 'ArrowLeft' })
    expectFocused(screen.getByRole('link', { name: 'Share on X' }))
  })
})
