import { use, useEffect, useState } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../ThemeContext'
import styles from './Progressbar.module.css'

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const { theme } = use(ThemeContext)
  
  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <div
      className={classNames(styles.root, {
        [styles[theme]]: theme,
      })}
      style={{ width: `${scrollProgress}%` }}
    />
  )
}
