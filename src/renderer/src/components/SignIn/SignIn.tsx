import { useState } from 'react'
import Button from '../Button/Button'
import styles from './SignIn.module.scss'
import Link from '../Link/Link'
import Input from '../Input/Input'
import { useAuth } from '@renderer/utils/authProvider'
import { getAuthData } from '@renderer/api/auth'

interface SignInProps {
  setPage: (page: string) => void
  setLoading: (loading: boolean) => void
}

function SignIn({ setPage, setLoading }: SignInProps): JSX.Element {
  const [username, setUsername] = useState('juliantmayes@gmail.com')
  const [password, setPassword] = useState('Okayseeyou2020!')

  const { login } = useAuth()

  const handleSignIn = () => {
    setLoading(true)
    getAuthData(username, password).then((res) => {
      console.log(res)
      login(res)
      setLoading(false)
    })
  }

  return (
    <div className={styles['login']}>
      <Input
        label="username"
        style={{ marginBottom: '20px' }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="password"
        style={{ marginBottom: '40px' }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button style={{ marginBottom: '15px' }} text="Sign In" onClick={handleSignIn} />
      <Link text="Need an account?" onClick={() => setPage('signup')} />
    </div>
  )
}

export default SignIn
