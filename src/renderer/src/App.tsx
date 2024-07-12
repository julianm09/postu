import { useEffect, useState } from 'react'
import Splash from './components/Splash/Splash'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Dashboard from './components/Dashboard/Dashboard'
import { pb } from './api/pocketbase'
import { AuthProvider, useAuth } from './utils/authProvider'
import LoadScreen from './components/LoadScreen/LoadScreen'

// const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' })

function App(): JSX.Element {
  const [page, setPage] = useState('splash')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  return (
    <>
      {loading && <LoadScreen />}
      {!user && page === 'splash' && <Splash setPage={setPage} />}
      {!user && page === 'signin' && <SignIn setPage={setPage} setLoading={setLoading} />}
      {!user && page === 'signup' && <SignUp setPage={setPage} setLoading={setLoading} />}
      {user && <Dashboard />}
    </>
  )
}

export default App
