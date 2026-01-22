import type { SVGProps } from 'react'
import { isEqual } from 'radashi'
import { memo } from 'react'

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
      <g fill="currentColor" strokeMiterlimit="10" strokeWidth="0">
        <path
          fill="red"
          d="M249.02 66.99a31.68 31.68 0 0 0-22.36-22.36c-19.72-5.29-98.8-5.29-98.8-5.29s-79.09 0-98.8 5.29A31.68 31.68 0 0 0 6.68 66.99c-5.28 19.72-5.28 60.87-5.28 60.87s0 41.15 5.28 60.87a31.68 31.68 0 0 0 22.36 22.36c19.72 5.28 98.8 5.28 98.8 5.28s79.1 0 98.81-5.28a31.68 31.68 0 0 0 22.36-22.36c5.29-19.72 5.29-60.87 5.29-60.87s0-41.15-5.29-60.87z"
        />
        <path fill="#fff" d="m102.57 165.8 65.7-37.94-65.7-37.94z" />
      </g>
    </svg>
  )
}

const YouTubeColored = memo(SvgComponent, isEqual)
export default YouTubeColored
