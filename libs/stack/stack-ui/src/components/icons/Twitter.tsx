import { isEqual } from 'radashi'
import * as React from 'react'
import { memo } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        strokeMiterlimit="10"
        strokeWidth="0"
        d="M81 231A147 147 0 0 0 228 76c11-7 19-16 26-27-9 5-19 7-29 9 10-7 18-17 22-29-10 6-21 10-33 12a52 52 0 0 0-88 48C83 87 45 66 19 35a52 52 0 0 0 16 69c-8 0-16-3-23-7v1c0 25 17 46 41 51a52 52 0 0 1-23 1c6 20 26 35 48 36a104 104 0 0 1-77 21c23 15 51 24 80 24"
      />
    </svg>
  )
}

const Twitter = memo(SvgComponent, isEqual)
export default Twitter
