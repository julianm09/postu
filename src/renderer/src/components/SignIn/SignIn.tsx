import Button from '../Button/Button'
import styles from './SignIn.module.scss'
import Link from '../Link/Link'
import Input from '../Input/Input'

function SignIn({ setPage }): JSX.Element {
  return (
    <div className={styles['login']}>
      <Input label={'username'} style={{ marginBottom: '20px' }} />
      <Input label={'password'} style={{ marginBottom: '40px' }} />
      <Button style={{ marginBottom: '15px' }} text={'Sign In'} />
      <Link text={'Need an account?'} onClick={() => setPage('signup')} />
    </div>
  )
}

export default SignIn
