import { isEqual } from 'radashi'
import * as React from 'react'
import { memo } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="currentColor" {...props}>
      <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
    </svg>
  )
}

const ChevronLeft = memo(SvgComponent, isEqual)
export default ChevronLeft
