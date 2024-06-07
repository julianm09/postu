import Button from '../Button/Button'
import styles from './SignUp.module.scss'
import Link from '../Link/Link'
import Input from '../Input/Input'

function SignUp({ setPage }): JSX.Element {
  return (
    <div className={styles['signup']}>
      <Input label={'username'} style={{ marginBottom: '20px' }} />
      <Input label={'email'} style={{ marginBottom: '20px' }} />
      <Input label={'password'} style={{ marginBottom: '20px' }} />
      <Input label={'confirm password'} style={{ marginBottom: '40px' }} />
      <Button style={{ marginBottom: '15px' }} text={'Sign Up'} />
      <Link text={'Already have an account?'} onClick={() => setPage('signin')} />
    </div>
  )
}

export default SignUp
