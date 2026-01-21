import { isEqual } from 'radashi'
import * as React from 'react'
import { memo } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.728 13.66 12.388 19 7.05 13.66M12.4 5v14" stroke="currentColor" />
    </svg>
  )
}

const ArrowDown = memo(SvgComponent, isEqual)
export default ArrowDown
