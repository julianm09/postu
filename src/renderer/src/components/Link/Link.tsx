import styles from './Link.module.scss'

function Link({ style = {}, text = 'Sign In', onClick = () => {} }): JSX.Element {
  return (
    <p className={styles['link']} style={style} onClick={onClick}>
      {text}
    </p>
  )
}

export default Link
