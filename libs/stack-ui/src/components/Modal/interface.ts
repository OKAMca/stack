import type { OverlayTriggerState } from '@react-stately/overlays'
import type React from 'react'

export interface TModalProps {
  children: React.ReactNode
  state: OverlayTriggerState
  transitionComponent?: (props: { isVisible: boolean; children: React.ReactNode }) => JSX.Element
  onCloseCallBack?: () => void
}
