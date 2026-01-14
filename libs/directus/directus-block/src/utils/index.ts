import { useFragment } from '../generated/fragment-masking'
import { getBlock } from './getBlock'

/**
 * @deprecated Use `getBlock` instead
 */
export const useBlock = getBlock

export { default as getBlockProps } from './getBlockProps'
export { default as mergeConfigs } from './mergeConfigs'
export { useFragment as getFragment }
export { getBlock }
