import Button from '../Button/Button'
import Quote from '../Intro/Intro'
import styles from './Splash.module.scss'
import Link from '../Link/Link'
import Logo from '../Logo/Logo'

function Splash({ setPage }): JSX.Element {
  return (
    <div className={styles['splash']}>
      <Logo style={{ marginBottom: '5px' }} text={'postu'} />
      <Quote style={{ marginBottom: '40px' }} text={'Your personal posture coach'} />
      <Button style={{ marginBottom: '15px' }} text={'Sign In'} onClick={() => setPage('signin')} />
      <Link text={'Sign Up'} onClick={() => setPage('signup')} />
    </div>
  )
}

export default Splash
