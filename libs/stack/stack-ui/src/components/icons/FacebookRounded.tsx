import type { SVGProps } from 'react'
import { isEqual } from 'radashi'
import { memo } from 'react'

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.5001C2 17.4501 5.6 21.5501 10.35 22.4001L10.4094 22.3515C10.4063 22.3509 10.4032 22.3503 10.4001 22.3498V15.2998H7.90015V12.4998H10.4001V10.2998C10.4001 7.79978 12.0001 6.39978 14.3001 6.39978C15.0001 6.39978 15.8001 6.49978 16.5001 6.59978V9.14978H15.2001C14.0001 9.14978 13.7001 9.74978 13.7001 10.5498V12.4998H16.3501L15.9001 15.2998H13.7001V22.3498C13.6696 22.3553 13.639 22.3608 13.6084 22.366L13.65 22.4001C18.4 21.5501 22 17.4501 22 12.5001C22 7.00006 17.5 2.50006 12 2.50006C6.5 2.50006 2 7.00006 2 12.5001Z"
        fill="currentColor"
      />
    </svg>
  )
}

const FacebookRounded = memo(SvgComponent, isEqual)
export default FacebookRounded
