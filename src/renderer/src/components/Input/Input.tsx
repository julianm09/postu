import styles from './Input.module.scss'
import React from 'react'

interface InputProps {
  style?: React.CSSProperties
  label?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
  style = {},
  label = '',
  value = '',
  onChange = () => {}
}: InputProps): JSX.Element {
  return (
    <input
      className={styles['input']}
      style={style}
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
