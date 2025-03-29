import { useState } from 'react'
import { ThemeContext as ThemeContextProvider } from '.'

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  
  const toggleTheme = () => {
    const exchangeTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(exchangeTheme)
  }
  
  return (
    <ThemeContextProvider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextProvider>
  )
}
