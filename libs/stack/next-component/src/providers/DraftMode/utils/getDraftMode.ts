'use server'

import { draftMode } from 'next/headers'

export async function getDraftMode() {
  return draftMode()
}
