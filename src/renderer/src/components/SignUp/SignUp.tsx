import Button from '../Button/Button'
import styles from './SignUp.module.scss'
import Link from '../Link/Link'
import Input from '../Input/Input'
import { useState } from 'react'
import { createUser } from '@renderer/api/createUser'
import { getAuthData } from '@renderer/api/auth'
import { useAuth } from '@renderer/utils/authProvider'

interface SignUpProps {
  setPage: (page: string) => void
  setLoading: (loading: boolean) => void
}

function SignUp({ setPage, setLoading }: SignUpProps): JSX.Element {
  const [email, setEmail] = useState('julian@gmail.com')
  const [username, setUsername] = useState('julian')
  const [password, setPassword] = useState('Okayseeyou2020!')
  const [passwordConfirm, setPasswordConfrim] = useState('Okayseeyou2020!')

  const { login } = useAuth()

  const handleCreateUser = async () => {
    setLoading(true)
    try {
      const user = await createUser(email, username, password, passwordConfirm)
      if (user) {
        const authData = await getAuthData(username, password)
        console.log(authData)
        login(authData)
        setLoading(false)
      }
    } catch (error) {
      console.error('Error creating user:', error)
      setLoading(false)
    }
  }

  return (
    <div className={styles['signup']}>
      <Input
        label={'email'}
        style={{ marginBottom: '20px' }}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <Input
        label={'username'}
        style={{ marginBottom: '20px' }}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <Input
        label={'password'}
        style={{ marginBottom: '20px' }}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <Input
        label={'confirm password'}
        style={{ marginBottom: '40px' }}
        value={passwordConfirm}
        onChange={(e) => {
          setPasswordConfrim(e.target.value)
        }}
      />
      <Button style={{ marginBottom: '15px' }} text={'Sign Up'} onClick={handleCreateUser} />
      <Link text={'Already have an account?'} onClick={() => setPage('signin')} />
    </div>
  )
}

export default SignUp
