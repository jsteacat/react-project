import { Button } from '../Button/Button.jsx'
import styles from './Counter.module.css'

export const Counter = ({ count, min, max, increment, decrement }) => {
  return (
    <div className={styles.root}>
      <Button disabled={count === min} onClick={decrement}>-</Button>
      {count}
      <Button disabled={count === max} onClick={increment}>+</Button>
    </div>
  )
}
