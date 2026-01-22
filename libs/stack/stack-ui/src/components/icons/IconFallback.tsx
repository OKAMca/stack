import type { SVGProps } from 'react'
import { memo } from 'react'

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} fill="currentColor" {...props} />
}

const Fallback = memo(SvgComponent)
export default Fallback
