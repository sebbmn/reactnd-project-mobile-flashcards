import {saveDeckTitle, getDecks, clearAll, getDeck, addCardToDeck} from '../utils/api'

export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addCard (card) {
  return {
    type: ADD_CARD,
    card,
  }
}
export function addDeckToStorage(deckName) {
  return (dispatch) => {
    saveDeckTitle(deckName)
          .then(() => dispatch(addDeck(deckName)))
          .catch(() => dispatch())
  }
}