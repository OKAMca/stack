import type { SVGProps } from 'react'
import { isEqual } from 'radashi'
import { memo } from 'react'

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

const CloseBtn = memo(SvgComponent, isEqual)
export default CloseBtn
