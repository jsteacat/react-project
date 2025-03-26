import { Counter } from '../Counter/Counter.jsx'
import { Button } from '../Button/Button.jsx'
import { useReviewForm } from './useReviewForm.js'
import styles from './ReviewForm.module.css'

export const ReviewForm = () => {
  const {
    name,
    text,
    rating,
    MAX_COUNT,
    MIN_COUNT,
    setNameAction,
    setTextAction,
    incrementRating,
    decrementRating,
    clearAction,
  } = useReviewForm()

  return (
    <div className="review-form">
      <div className={styles.field}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setNameAction(e.target.value)}
        />
      </div>
      <br/>
      <div className={styles.field}>
        <label>Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setTextAction(e.target.value)}
        />
      </div>
      <br/>
      <div className={styles.field}>
        <label>Rating:</label>
        <Counter
          count={rating}
          min={MIN_COUNT}
          max={MAX_COUNT}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </div>
      <br/>
      <Button onClick={() => clearAction()}>Clear</Button>
    </div>
  )
}
