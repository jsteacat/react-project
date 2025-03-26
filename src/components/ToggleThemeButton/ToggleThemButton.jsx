import { use } from 'react'
import { ThemeContext } from '../ThemeContext'
import { Button } from '../Button/Button.jsx'

export const ToggleThemButton = () => {
  const { toggleTheme } = use(ThemeContext)
  
  return (
    <Button onClick={toggleTheme}>Switch theme</Button>
  )
}
