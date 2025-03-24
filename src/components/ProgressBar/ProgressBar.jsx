import { useEffect, useState } from 'react'

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const updateScrollProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (window.scrollY / totalHeight) * 100
    setScrollProgress(progress)
  };
  
  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress)
    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    };
  }, [])

  return (
    <div className="progress-bar" style={{width: `${scrollProgress}%`}}/>
  )
}
