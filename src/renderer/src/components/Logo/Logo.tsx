import styles from './Logo.module.scss'

function Logo({ style = {}, text = 'postu' }): JSX.Element {
  return (
    <p className={styles['logo']} style={style}>
      {text}
    </p>
  )
}

export default Logo
