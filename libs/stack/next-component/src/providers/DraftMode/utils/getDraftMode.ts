import 'server-only'

import { draftMode } from 'next/headers'

export async function getDraftMode() {
  return draftMode()
}
