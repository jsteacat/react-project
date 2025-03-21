import { useCounter } from './useCounter.js'

export const Counter = ({ count, min, max, onChange }) => {
  const { currentCount, increment, decrement } = useCounter(count, min, max, onChange)
  
  return (
    <div className="counter">
      <button disabled={currentCount === min} onClick={decrement}>-</button>
      <span>{currentCount}</span>
      <button disabled={currentCount === max} onClick={increment}>+</button>
    </div>
  )
}
