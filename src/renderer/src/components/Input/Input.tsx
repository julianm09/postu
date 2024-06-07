import styles from './Input.module.scss'

function Input({ style = {}, label }): JSX.Element {
  return <input className={styles['input']} style={style} placeholder={label}></input>
}

export default Input
