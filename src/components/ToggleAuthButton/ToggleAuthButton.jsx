import { use } from 'react'
import { UserContext } from '../UserContext'
import { Button } from '../Button/Button.jsx'

export const ToggleAuthButton = () => {
  const { user, toggleAuth } = use(UserContext)
  
  return (
    <Button onClick={toggleAuth}>
      {user ? 'Logout' : 'Login'}
    </Button>
  )
}
