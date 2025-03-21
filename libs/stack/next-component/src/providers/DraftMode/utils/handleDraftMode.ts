export interface DraftModeOptions {
  enable?: boolean
  cookieDuration?: number // Duration in days
}

export async function handleDraftMode(options: DraftModeOptions | boolean) {
  try {
    // Handle the case where options is a boolean (for backward compatibility)
    const enable = typeof options === 'boolean' ? options : options.enable
    const cookieDuration = typeof options === 'boolean' ? undefined : options.cookieDuration

    const response = await fetch('/api/draft-mode', {
      method: 'POST',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enable, cookieDuration }),
    })

    const json = await response.json()
    const { isEnabled } = json ?? {}

    if (!isEnabled || typeof isEnabled !== 'boolean') {
      return { isEnabled: false }
    }

    return { isEnabled }
  } catch (error) {
    throw new Error(`Something happened while fetching draft mode: ${error}`)
  }
}
