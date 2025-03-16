import { Counter } from '../Counter/Counter.jsx'

export const Dish = ({ dish }) => {
  return (
    <>
      {dish.name}
      <Counter />
    </>
  )
}
