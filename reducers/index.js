import { ADD_DECK, ADD_CARD } from '../actions'

function deckList (state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
     return {...state,
        [action.deck]: {
        title: action.deck,
        questions: []
      }}
      case ADD_CARD:
      return {...state,
           [action.card.deckName]: {
            ...state[action.card.deckName],
            questions : [...state[action.card.deckName]['questions'],
              {
                question: action.card.question,
                answer: action.card.answer
              }
            ]
        }
      }
    default :
      return state
  }
}

export default deckList