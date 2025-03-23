export const Counter = ({ count, min, max, increment, decrement }) => {
  return (
    <div>
      <button disabled={count === min} onClick={decrement} type="button">-</button>
      {count}
      <button disabled={count === max} onClick={increment} type="button">+</button>
    </div>
  )
}
