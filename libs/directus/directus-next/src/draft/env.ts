export function getDraftSecretDefault(): string {
  return process.env.NEXT_API_DRAFT_SECRET || ''
}
