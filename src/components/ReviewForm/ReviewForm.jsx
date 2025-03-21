import { Counter } from '../Counter/Counter.jsx'
import { useReviewForm } from './useReviewForm.js'

export const ReviewForm = () => {
  const {
    MAX_COUNT,
    MIN_COUNT,
    SET_NAME_ACTION,
    SET_TEXT_ACTION,
    SET_RATING_ACTION,
    CLEAR_ACTION,
    form,
    dispatch,
  } = useReviewForm()

  const { name, text, rating } = form

  return (
    <div className="review-form">
      <div className="review-field" style={{display: 'flex', gap: '5px'}}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch({ type: SET_NAME_ACTION, payload: { name: e.target.value } })}
        />
      </div>
      <br/>
      <div className="review-field" style={{display: 'flex', gap: '5px'}}>
        <label>Text:</label>
        <input
          value={text}
          onChange={(e) => dispatch({ type: SET_TEXT_ACTION, payload: { text: e.target.value } })}
        />
      </div>
      <br/>
      <div className="review-field" style={{display: 'flex', gap: '5px'}}>
        <label>Rating:</label>
        <Counter
          count={rating}
          min={MIN_COUNT}
          max={MAX_COUNT}
          onChange={(newRating) => dispatch({ type: SET_RATING_ACTION, payload: { rating: newRating } })}
        />
      </div>
      <br/>
      <button onClick={() => dispatch({ type: CLEAR_ACTION })}>Clear</button>
    </div>
  )
}
