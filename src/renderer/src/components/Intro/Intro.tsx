import styles from './Intro.module.scss'

function Intro({ style = {}, text = 'Intro' }): JSX.Element {
  return (
    <p className={styles['intro']} style={style}>
      {text}
    </p>
  )
}

export default Intro
