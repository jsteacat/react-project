import { Counter } from '../Counter/Counter.jsx'

const MAX_COUNT = 5
const MIN_COUNT = 0

export const Dish = ({ dish }) => {
  let count = MIN_COUNT

  return (
    <>
      {dish.name}
      <Counter
        count={count}
        min={MIN_COUNT}
        max={MAX_COUNT}
        onChange={(newCount) => count = newCount}
      />
    </>
  )
}
