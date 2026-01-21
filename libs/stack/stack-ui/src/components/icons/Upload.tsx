import { isEqual } from 'radashi'
import * as React from 'react'
import { memo } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M17 21H7a4 4 0 0 1-4-4v-1a1 1 0 1 1 2 0v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 1 2 0v1a4 4 0 0 1-4 4Zm-5-4a1 1 0 0 1-1-1V6.41l-2.29 2.3a1.004 1.004 0 0 1-1.42-1.42l4-4a1 1 0 0 1 .33-.21A1 1 0 0 1 12 3a1 1 0 0 1 .38.08 1 1 0 0 1 .33.21l4 4a1.004 1.004 0 1 1-1.42 1.42L13 6.41V16a1 1 0 0 1-1 1Z"
        fill="currentColor"
      />
    </svg>
  )
}

const Upload = memo(SvgComponent, isEqual)
export default Upload
