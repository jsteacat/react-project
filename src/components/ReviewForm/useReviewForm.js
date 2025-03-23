import { useReducer } from 'react'

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
      return {...state, name: payload}
    
    case 'SET_TEXT_ACTION':
      return {...state, text: payload}
    
    case 'SET_RATING_ACTION':
      return {...state, rating: payload}
    
    case 'CLEAR_ACTION':
      return {...DEFAULT_FORM_VALUE}
    
    default:
      return state
  }
}

export const useReviewForm = () => {
  const [{ name, text, rating }, dispatch] = useReducer(
    reducer,
    DEFAULT_FORM_VALUE
  );
  
  const setNameAction = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name })
  }
  
  const setTextAction = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text })
  }
  
  const incrementRating = () => {
    if (rating < MAX_COUNT) {
      dispatch({ type: SET_RATING_ACTION, payload: rating + 1 })
    }
  }
  
  const decrementRating = () => {
    if (rating > MIN_COUNT) {
      dispatch({ type: SET_RATING_ACTION, payload: rating - 1 })
    }
  }
  
  const clearAction = () => {
    dispatch({ type: CLEAR_ACTION })
  }
  
  return {
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
  }
}
