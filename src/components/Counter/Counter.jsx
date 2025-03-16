import { useCount } from './useCount'

export const Counter = () => {
  const maxCount = 5
  const minCount = 0
  const { count, increment, decrement } = useCount(maxCount, minCount)
  
  return (
    <div className="counter">
      <button disabled={count === minCount} onClick={decrement}>-</button>
      <span>{count}</span>
      <button disabled={count === maxCount} onClick={increment}>+</button>
    </div>
  )
}
