import { useState, useEffect } from 'react'

export const useCounter = (initialCount, minCount, maxCount, onChange) => {
  const [currentCount, setCount] = useState(initialCount)
  
  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])
  
  const increment = () => {
    if (currentCount < maxCount) {
      const newCount = currentCount + 1
      setCount(newCount)
      onChange(newCount)
    }
  }
  
  const decrement = () => {
    if (currentCount > minCount) {
      const newCount = currentCount - 1
      setCount(newCount)
      onChange(newCount)
    }
  }
  
  return { currentCount, increment, decrement }
}
