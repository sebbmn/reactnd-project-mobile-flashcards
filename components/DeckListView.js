import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDeck, addCard } from '../actions'
import { Text, View, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import {saveDeckTitle, getDecks, clearAll, getDeck, addCardToDeck} from '../utils/api'

function populate() {
  const initialDeckList = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React??',
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
  //clearAll()
  saveDeckTitle('React')
  /**saveDeckTitle('JavaScript') 

  addCardToDeck('JavaScript', initialDeckList.JavaScript.questions[0])   
  **/
  return addCardToDeck('React', initialDeckList.React.questions[0]).then(() => {
    addCardToDeck('React', initialDeckList.React.questions[1])
  })
}

class DeckListView extends Component {
  componentDidMount = () => {
    //clearAll()
     //populate().then(() => {
      getDecks().then( (results) => {
        results.map( (deckName) => {
          if(deckName !== 'MobileFlashCards:notifications') {
            this.props.addD(deckName)
            getDeck(deckName).then((deck) => {
              JSON.parse(deck).questions.map ( (card) => {
                this.props.addC({deckName: deckName ,question: card.question, answer: card.answer})
              })
          })} else {
            getDeck(deckName).then((deck) => {
            })
          }
        })
      })
    //})
  }
  render() {
    const { deckList } = this.props
    let decks = Object.keys(deckList).map(e=>({title: e}))

    return (
      <View>
        <FlatList
          data={decks}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {deckName: item.title})}>
              <Text style={styles.button}>{item.title} 
              {deckList[item.title].questions.length > 1 ? 
                  ` ${deckList[item.title].questions.length} cards`
                :
                  ` ${deckList[item.title].questions.length} card`
                }
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}
function mapStateToProps (state) {
  return {
    deckList: state
  }
}
function mapDispatchToProps (dispatch) {
  return { 
    addD: (data) => dispatch(addDeck(data)),
    addC: (data) => dispatch(addCard(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckListView)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#444444',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
})