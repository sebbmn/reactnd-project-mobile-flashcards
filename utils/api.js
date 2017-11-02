import { AsyncStorage } from 'react-native'

const deckListTest = {
  test:
  {
    title: 'test',
    questions: []
  }
}
export function getDecks() {
  return AsyncStorage.getItem('Test').then ((results) => {
      console.log(results)
    }
  )
  //return all of the decks along with their titles, questions, and answers.
} 
export function getDeck(id) {
  //take in a single id argument and return the deck associated with that id. 
}
export function saveDeckTitle(title) {
  //return AsyncStorage.setItem('Test', JSON.stringify(deckListTest))
  return AsyncStorage.mergeItem('Test', JSON.stringify({test2:{title: 'test2',questions:[]}}))
  //take in a single title argument and add it to the decks.
} 
export function addCardToDeck(title, card) {

}