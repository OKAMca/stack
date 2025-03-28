'use server'

import { draftMode } from 'next/headers'

export function getDraftMode() {
  return draftMode()
}
