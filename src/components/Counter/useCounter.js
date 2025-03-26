import { useCallback, useState } from 'react'

export const useCounter = (minCount, maxCount) => {
  const [count, setCount] = useState(0)
  
  const increment = useCallback(() => {
    setCount((prevCount) => {
      if (prevCount < maxCount) {
        return prevCount + 1
      }
      return prevCount
    })
  }, [maxCount])
  
  const decrement = useCallback(() => {
    setCount((prevCount) => {
      if (prevCount > minCount) {
        return prevCount - 1
      }
      return prevCount
    })
  }, [minCount])
  
  return {
    count,
    increment,
    decrement,
  }
}
