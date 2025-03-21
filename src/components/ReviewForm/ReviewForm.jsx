import { useReducer } from 'react'
import { Counter } from '../Counter/Counter.jsx'

const MAX_COUNT = 5
const MIN_COUNT = 1
const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  rating: MIN_COUNT,
}

const SET_NAME_ACTION = 'SET_NAME_ACTION'
const SET_TEXT_ACTION = 'SET_TEXT_ACTION'
const SET_RATING_ACTION = 'SET_RATING_ACTION'
const CLEAR_ACTION = 'CLEAR_ACTION'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_NAME_ACTION':
      return {...state, name: payload.name}
    
    case 'SET_TEXT_ACTION':
      return {...state, text: payload.text}
    
    case 'SET_RATING_ACTION':
      return {...state, rating: payload.rating}
    
    case 'CLEAR_ACTION':
      return DEFAULT_FORM_VALUE
    
    default:
      return state
  }
}

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE)
  const { name, text, rating } = form
  
  return (
    <div className="review-form">
      <div className="review-field">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch({ type: SET_NAME_ACTION, payload: { name: e.target.value } })}
        />
      </div>
      <div className="review-field">
        <label>Text:</label>
        <input
          value={text}
          onChange={(e) => dispatch({ type: SET_TEXT_ACTION, payload: { text: e.target.value } })}
        />
      </div>
      <div className="review-field">
        <label>Rating:</label>
        <Counter
          count={rating}
          min={MIN_COUNT}
          max={MAX_COUNT}
          onChange={(newRating) => dispatch({ type: SET_RATING_ACTION, payload: { rating: newRating } })}
        />
      </div>
      <button onClick={() => dispatch({ type: CLEAR_ACTION })}>Clear</button>
    </div>
  )
}
