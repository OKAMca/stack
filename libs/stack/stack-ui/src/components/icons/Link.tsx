import { isEqual } from 'radashi'
import * as React from 'react'
import { memo } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
      <g fill="currentColor" strokeMiterlimit="10" strokeWidth="0">
        <path d="M61.4 254.3A59.8 59.8 0 0 1 19 151.8L65.8 105a11.2 11.2 0 0 1 15.9 16l-46.8 46.7a37.3 37.3 0 0 0 0 53.1 37.6 37.6 0 0 0 53 0l46.9-46.8a11.2 11.2 0 1 1 15.9 16l-46.8 46.7a59.8 59.8 0 0 1-42.5 17.6zM182 154a11.2 11.2 0 0 1-8-19.2L220.8 88a37.6 37.6 0 0 0-53-53.1l-46.9 46.8a11.2 11.2 0 0 1-15.9-16L151.8 19a59.6 59.6 0 0 1 85 0 60.1 60.1 0 0 1 0 84.9l-46.9 46.8c-2.2 2.2-5 3.3-8 3.3z" />
        <path d="M72.6 194.3a11.2 11.2 0 0 1-8-19.1L175.3 64.7A11.2 11.2 0 1 1 191 80.6L80.6 191c-2.2 2.2-5.1 3.2-8 3.2z" />
      </g>
    </svg>
  )
}

const Link = memo(SvgComponent, isEqual)
export default Link
