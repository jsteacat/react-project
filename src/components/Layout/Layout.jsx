import { ProgressBar } from '../ProgressBar/ProgressBar.jsx'
import { ToggleThemButton } from '../ToggleThemeButton/ToggleThemButton.jsx'
import { ToggleAuthButton } from '../ToggleAuthButton/ToggleAuthButton.jsx'
import styles from './Layout.module.css'

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <ProgressBar />
      <header>Header</header>
      <div className={styles['user-actions']}>
        <ToggleThemButton />
        <ToggleAuthButton />
      </div>
      <main>{ children }</main>
      <footer>Footer</footer>
    </div>
  )
}
