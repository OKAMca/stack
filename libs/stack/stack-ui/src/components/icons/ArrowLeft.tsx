import { isEqual } from 'radashi'
import * as React from 'react'
import { memo } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g>
        <path d="M.075 11.622a1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l8 8a1.004 1.004 0 0 0 1.42-1.42l-6.3-6.29h19.59a1 1 0 0 0 0-2H3.405l6.3-6.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-8 8a1 1 0 0 0-.21.33Z" />
      </g>
      <defs>
        <clipPath>
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

const ArrowLeft = memo(SvgComponent, isEqual)
export default ArrowLeft
