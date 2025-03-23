import { Counter } from '../Counter/Counter.jsx'
import { useReviewForm } from './useReviewForm.js'

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
      <div className="review-field" style={{display: 'flex', gap: '5px'}}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setNameAction(e.target.value)}
        />
      </div>
      <br/>
      <div className="review-field" style={{display: 'flex', gap: '5px'}}>
        <label>Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setTextAction(e.target.value)}
        />
      </div>
      <br/>
      <div className="review-field" style={{display: 'flex', gap: '5px'}}>
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
      <button onClick={() => clearAction()}>Clear</button>
    </div>
  )
}
