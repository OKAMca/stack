import styles from './directus-lib.module.css'

/* eslint-disable-next-line */
export interface DirectusLibProps {}

export function DirectusLib(props: DirectusLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DirectusLib!</h1>
    </div>
  )
}

export default DirectusLib
