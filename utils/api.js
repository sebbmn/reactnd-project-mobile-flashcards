import { AsyncStorage } from 'react-native'

export function getDecks() {
  return AsyncStorage.getAllKeys((results) => {
      JSON.parse(results)
    }
  )
} 
export function getDeck(id) {
  return AsyncStorage.getItem(id, (result) => {
      JSON.parse(result)
    }
  ) 
}
export function saveDeckTitle(deckName) {
  return AsyncStorage.mergeItem(deckName, JSON.stringify({title: deckName,questions:[]}))
} 
export function addCardToDeck(deckName, card) {
  return getDeck(deckName).then((deck) => {
    return AsyncStorage.mergeItem(deckName, JSON.stringify({questions:[...JSON.parse(deck).questions,card]}))
  })
}
export function clearAll() {
  AsyncStorage.clear( (error)=>console.log(error))
}