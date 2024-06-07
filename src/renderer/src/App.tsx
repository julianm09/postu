import { useState } from 'react'
import Splash from './components/Splash/Splash'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'

function App(): JSX.Element {
  const [page, setPage] = useState('splash')
  return (
    <>
      {page === 'splash' && <Splash setPage={setPage} />}
      {page === 'signin' && <SignIn setPage={setPage} />}
      {page === 'signup' && <SignUp setPage={setPage} />}
    </>
  )
}

export default App
