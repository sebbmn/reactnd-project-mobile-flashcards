import { AsyncStorage } from 'react-native'

const deckListTest = {
  test:
  {
    title: 'test',
    questions: []
  }
}
export function getDecks() {
  return AsyncStorage.getAllKeys((results) => {
      JSON.parse(results)
    }
  )
  //return all of the decks along with their titles, questions, and answers.
} 
export function getDeck(id) {
  return AsyncStorage.getItem(id, (result) => {
      //console.log(JSON.parse(result))
      JSON.parse(result)
    }
  ) 
}
export function saveDeckTitle(deckName) {
  //return AsyncStorage.setItem(deckName, JSON.stringify({title: deckName,questions:[]}))
  return AsyncStorage.mergeItem(deckName, JSON.stringify({title: deckName,questions:[]}))
  //take in a single title argument and add it to the decks.
} 
export function addCardToDeck(title, card) {

}
export function clearAll() {
  AsyncStorage.clear( (error)=>console.log(error))
}