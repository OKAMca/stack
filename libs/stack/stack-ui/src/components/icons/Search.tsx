import { isEqual } from 'radashi'
import * as React from 'react'
import { memo } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
      <g stroke="currentColor" clipPath="url(#a)">
        <circle cx="8.2727" cy="8.2727" r="7.2727" />
        <path d="M13.4551 13.4531L19.5005 19.4986" />
      </g>
      <defs>
        <clipPath>
          <path fill="currentColor" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

const Search = memo(SvgComponent, isEqual)
export default Search
