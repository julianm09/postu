import React from 'react'
import styles from './Welcome.module.scss'

interface WelcomeProps {
  style?: React.CSSProperties
  user?: string
  streak?: string | number
}

const Welcome: React.FC<WelcomeProps> = ({ style = {}, user = 'Intro', streak = '1' }) => {
  return (
    <p className={styles.welcome} style={style}>
      Welcome, {user}! Your streak is{' '}
      <span className={styles.highlight}>
        {streak} {streak == 1 ? 'day' : 'days'}!
      </span>
    </p>
  )
}

export default Welcome
