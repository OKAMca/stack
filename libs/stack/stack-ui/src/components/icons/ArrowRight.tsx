import { isEqual } from 'radashi'
import * as React from 'react'
import { memo } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g>
        <path d="M23.92 12.38a1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-8-8a1.003 1.003 0 1 0-1.42 1.42l6.3 6.29H1a1 1 0 1 0 0 2h19.59l-6.3 6.29a1 1 0 0 0 0 1.42 1.002 1.002 0 0 0 1.42 0l8-8c.091-.095.162-.207.21-.33Z" />
      </g>
      <defs>
        <clipPath>
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

const ArrowRight = memo(SvgComponent, isEqual)
export default ArrowRight
