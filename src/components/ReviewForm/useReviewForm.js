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

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE)

  return {
    MAX_COUNT,
    MIN_COUNT,
    SET_NAME_ACTION,
    SET_TEXT_ACTION,
    SET_RATING_ACTION,
    CLEAR_ACTION,
    form,
    dispatch,
  }
}
