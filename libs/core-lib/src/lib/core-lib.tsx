import styles from './core-lib.module.css'

export interface CoreLibProps {
  name?: string
}

export function CoreLib(props: CoreLibProps) {
  const { name } = props
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
    </div>
  )
}

export default CoreLib
