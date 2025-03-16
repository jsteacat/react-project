import { Counter } from '../Counter/Counter.jsx'

export const Dish = ({ dish }) => {
  return (
    <li>
      {dish.name}
      <Counter />
    </li>
  )
}
