import { useState } from 'react'
import { UserContext as UserContextProvider } from '.'

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null)
  
  const toggleAuth = () => {
    const state = user ? null : 'User'
    setUser(state)
  }
  
  return (
    <UserContextProvider value={{ user, toggleAuth }}>
      {children}
    </UserContextProvider>
  )
}
