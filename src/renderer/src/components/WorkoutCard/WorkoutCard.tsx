import Button from '../Button/Button'
import Link from '../Link/Link'
import styles from './WorkoutCard.module.scss'

function WorkoutCard({ duration = 3, time = '11:00AM', exercises }): JSX.Element {
  return (
    <div className={styles['container']}>
      <div className={styles['card']}>
        <div className={styles['card-top']}>
          <p>{duration} Min</p>
          <Link text={time} />
        </div>
        <div className={styles['card-mid']}>
          {exercises && exercises.map((exercise) => <div>{exercise.name}</div>)}
        </div>
        <div className={styles['card-bot']}>
          <Link text="edit" />
        </div>
      </div>
      <Button text="Start" style={{ width: '150px' }} />
    </div>
  )
}

export default WorkoutCard
