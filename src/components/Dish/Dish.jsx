import { useState } from 'react'
import { Counter } from '../Counter/Counter.jsx'

const MAX_COUNT = 5
const MIN_COUNT = 0

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(MIN_COUNT)

  return (
    <>
      {dish.name}
      <Counter
        count={count}
        min={MIN_COUNT}
        max={MAX_COUNT}
        onChange={(newCount) => setCount(newCount)}
      />
    </>
  )
}
