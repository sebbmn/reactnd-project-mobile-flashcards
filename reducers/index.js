import { ADD_DECK, ADD_CARD } from '../actions'

const initialDeckList = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
function deckList (state = initialDeckList, action) {
  switch (action.type) {
    case ADD_DECK:
     return {...state,
        [action.deck]: {
        title: action.deck
      }}
    default :
      return state
  }
}

export default deckList