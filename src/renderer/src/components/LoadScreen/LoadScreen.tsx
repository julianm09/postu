import styles from './LoadScreen.module.scss'

interface LoadScreenProps {}

function LoadScreen({}: LoadScreenProps): JSX.Element {
  return <div className={styles['load-screen']}>loading</div>
}

export default LoadScreen
