import isEqual from 'lodash.isequal'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={42} height={42} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" {...props}>
    <path
      d="M46.75 49.625a1.874 1.874 0 0 1-1.331-.544L35.5 39.144l-9.919 9.937a1.876 1.876 0 0 1-2.662 0 1.873 1.873 0 0 1 0-2.662l9.937-9.919-9.937-9.919a1.883 1.883 0 0 1 2.662-2.662l9.92 9.937 9.918-9.937a1.873 1.873 0 0 1 2.662 0 1.876 1.876 0 0 1 0 2.662l-9.937 9.92 9.937 9.918a1.876 1.876 0 0 1-1.33 3.206Z"
      fill="currentColor"
    />
  </svg>
)

const CloseBtn = memo(SvgComponent, isEqual)
export default CloseBtn
