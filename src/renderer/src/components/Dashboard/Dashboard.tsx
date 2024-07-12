import { useAuth } from '@renderer/utils/authProvider'
import Intro from '../Intro/Intro'
import Link from '../Link/Link'
import WorkoutCard from '../WorkoutCard/WorkoutCard'
import styles from './Dashboard.module.scss'
import { workouts } from '@renderer/workout'
import Welcome from '../Welcome/Welcome'

function Dashboard(): JSX.Element {
  const { logout, user } = useAuth()

  return (
    <div className={styles['dashboard']}>
      <div className={styles['container']}>
        <div className={styles['container-top']}>
          <Welcome user={user?.record.username} streak={user?.record.streak} />
          <Link text="Settings" />
          <div onClick={logout}>signout</div>
        </div>

        <div className={styles['container-middle']}>
          <Intro text="Todays workouts" />
          <div className={styles['container-workouts']}>
            {workouts &&
              workouts.map((workout) => (
                <WorkoutCard
                  duration={workout?.duration}
                  time={workout?.time}
                  exercises={workout?.exercises}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
