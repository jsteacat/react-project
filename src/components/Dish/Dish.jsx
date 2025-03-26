import { use } from 'react'
import { Counter } from '../Counter/Counter.jsx'
import { useCounter } from '../Counter/useCounter'
import { UserContext } from '../UserContext'

const MAX_COUNT = 5
const MIN_COUNT = 0

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCounter(MIN_COUNT, MAX_COUNT)
  const { user } = use(UserContext)

  return (
    <>
      {dish.name}
      {Boolean(user) && <Counter
        count={count}
        min={MIN_COUNT}
        max={MAX_COUNT}
        increment={increment}
        decrement={decrement}
      />}
    </>
  )
}
