import { ProgressBar } from '../ProgressBar/ProgressBar.jsx'

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <ProgressBar />
      <header>Header</header>
      <main>{ children }</main>
      <footer>Footer</footer>
    </div>
  )
}
