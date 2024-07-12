import styles from './Button.module.scss'

function Button({ style = {}, text = 'button', onClick = () => {} }): JSX.Element {
  return (
    <button className={styles['button']} style={style} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
