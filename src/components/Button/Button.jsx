import { use } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../ThemeContext'
import styles from './Button.module.css'

export const Button = ({ children, disabled, onClick, variant = 'primary', className }) => {
  const { theme } = use(ThemeContext)

  return (
    <button
      className={classNames(styles.root, className, {
        [styles.primary]: variant === 'primary',
        [styles[theme]]: theme,
      })}
      disabled={disabled}
      onClick={onClick}
    >{children}</button>
  )
}
