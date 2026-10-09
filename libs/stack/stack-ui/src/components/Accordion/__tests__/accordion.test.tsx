import type { ReactNode } from 'react'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToString } from 'react-dom/server'
import { afterEach, describe, expect, it } from 'vitest'
import Accordion from '..'
import ThemeProvider from '../../../theme'
import AccordionItem from '../components/AccordionItem'

function withTheme(children: ReactNode) {
  return <ThemeProvider>{children}</ThemeProvider>
}

function getButton(name: string) {
  return screen.getByRole('button', { name })
}

function getPanel(button: HTMLElement) {
  const panelId = button.getAttribute('aria-controls')
  const panel = panelId != null ? document.getElementById(panelId) : null
  return panel
}

afterEach(() => {
  cleanup()
})

describe('accordion', () => {
  describe('default (unmount on close)', () => {
    it('does not render closed panel content', () => {
      render(withTheme(
        <Accordion id="acc">
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
        </Accordion>,
      ))

      expect(getButton('Title A').getAttribute('aria-expanded')).toBe('false')
      expect(screen.queryByText('Content A')).toBeNull()
    })

    it('renders the panel when the button is pressed', () => {
      render(withTheme(
        <Accordion id="acc">
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
        </Accordion>,
      ))

      fireEvent.click(getButton('Title A'))

      expect(getButton('Title A').getAttribute('aria-expanded')).toBe('true')
      expect(screen.getByText('Content A')).toBeTruthy()
    })

    it('moves focus into the opened panel by default (legacy behaviour)', async () => {
      const user = userEvent.setup()
      render(withTheme(
        <Accordion id="acc">
          <AccordionItem key="a" title="Title A">
            <button type="button">Inner</button>
          </AccordionItem>
        </Accordion>,
      ))

      const button = getButton('Title A')
      await user.click(button)

      expect(document.activeElement).toBe(getButton('Inner'))
    })

    it('keeps focus on the header button when autoFocusPanel is false', async () => {
      const user = userEvent.setup()
      render(withTheme(
        <Accordion id="acc" autoFocusPanel={false}>
          <AccordionItem key="a" title="Title A">
            <button type="button">Inner</button>
          </AccordionItem>
        </Accordion>,
      ))

      const button = getButton('Title A')
      await user.click(button)

      expect(getButton('Inner')).toBeTruthy()
      expect(document.activeElement).toBe(button)
    })
  })

  describe('defaultOpen on items', () => {
    it('opens a keyed item marked defaultOpen', () => {
      render(withTheme(
        <Accordion id="acc">
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
          <AccordionItem key="b" title="Title B" defaultOpen>Content B</AccordionItem>
        </Accordion>,
      ))

      expect(getButton('Title A').getAttribute('aria-expanded')).toBe('false')
      expect(getButton('Title B').getAttribute('aria-expanded')).toBe('true')
      expect(screen.getByText('Content B')).toBeTruthy()
    })

    it('opens an unkeyed item marked defaultOpen', () => {
      render(withTheme(
        <Accordion id="acc">
          <AccordionItem title="Title A">Content A</AccordionItem>
          <AccordionItem title="Title B" defaultOpen>Content B</AccordionItem>
        </Accordion>,
      ))

      expect(getButton('Title B').getAttribute('aria-expanded')).toBe('true')
    })

    it('opens every item with defaultSelectedKeys="all"', () => {
      render(withTheme(
        <Accordion id="acc" selectionMode="multiple" defaultSelectedKeys="all">
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
          <AccordionItem key="b" title="Title B">Content B</AccordionItem>
        </Accordion>,
      ))

      expect(getButton('Title A').getAttribute('aria-expanded')).toBe('true')
      expect(getButton('Title B').getAttribute('aria-expanded')).toBe('true')
    })
  })

  describe('headingLevel', () => {
    it('does not wrap the button in a heading by default', () => {
      render(withTheme(
        <Accordion id="acc">
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
        </Accordion>,
      ))

      expect(screen.queryByRole('heading')).toBeNull()
    })

    it('wraps the button in a heading of the given level', () => {
      render(withTheme(
        <Accordion id="acc" headingLevel={3}>
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
        </Accordion>,
      ))

      const heading = screen.getByRole('heading', { level: 3, name: 'Title A' })
      expect(heading.firstElementChild).toBe(getButton('Title A'))
    })
  })

  describe('keepMounted', () => {
    it('keeps closed panel content in the DOM, hidden until found', () => {
      render(withTheme(
        <Accordion id="acc" keepMounted>
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
        </Accordion>,
      ))

      const button = getButton('Title A')
      const panel = getPanel(button)
      expect(panel).not.toBeNull()
      expect(panel?.textContent).toContain('Content A')
      expect(panel?.getAttribute('hidden')).toBe('until-found')
      expect(button.getAttribute('aria-expanded')).toBe('false')
    })

    it('toggles the hidden attribute without unmounting', () => {
      render(withTheme(
        <Accordion id="acc" keepMounted>
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
        </Accordion>,
      ))

      const button = getButton('Title A')
      const panel = getPanel(button)

      fireEvent.click(button)
      expect(button.getAttribute('aria-expanded')).toBe('true')
      expect(getPanel(button)).toBe(panel)
      expect(panel?.hasAttribute('hidden')).toBe(false)

      fireEvent.click(button)
      expect(button.getAttribute('aria-expanded')).toBe('false')
      expect(panel?.getAttribute('hidden')).toBe('until-found')
    })

    it('opens the item when the browser finds text in it (beforematch)', () => {
      render(withTheme(
        <Accordion id="acc" keepMounted>
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
        </Accordion>,
      ))

      const button = getButton('Title A')
      const panel = getPanel(button)
      act(() => {
        panel?.dispatchEvent(new Event('beforematch'))
      })

      expect(button.getAttribute('aria-expanded')).toBe('true')
    })

    it('does not move focus into the panel by default', async () => {
      const user = userEvent.setup()
      render(withTheme(
        <Accordion id="acc" keepMounted>
          <AccordionItem key="a" title="Title A">
            <button type="button">Inner</button>
          </AccordionItem>
        </Accordion>,
      ))

      const button = getButton('Title A')
      await user.click(button)

      expect(document.activeElement).toBe(button)
    })

    it('moves focus into the panel on open when autoFocusPanel is true', async () => {
      const user = userEvent.setup()
      render(withTheme(
        <Accordion id="acc" keepMounted autoFocusPanel>
          <AccordionItem key="a" title="Title A">
            <button type="button">Inner</button>
          </AccordionItem>
        </Accordion>,
      ))

      const button = getButton('Title A')
      await user.click(button)

      expect(document.activeElement?.textContent).toBe('Inner')
    })

    it('server-renders closed panel content (hidden)', () => {
      const html = renderToString(withTheme(
        <Accordion id="acc" keepMounted>
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
        </Accordion>,
      ))

      expect(html).toContain('Content A')
      expect(html).toMatch(/hidden=""/)
    })

    it('does not server-render closed panel content in default mode', () => {
      const html = renderToString(withTheme(
        <Accordion id="acc">
          <AccordionItem key="a" title="Title A">Content A</AccordionItem>
        </Accordion>,
      ))

      expect(html).not.toContain('Content A')
    })
  })
})
