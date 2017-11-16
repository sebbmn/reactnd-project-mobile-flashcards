import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDeck, addCard } from '../actions'
import { Text, View, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import {saveDeckTitle, getDecks, clearAll, getDeck, addCardToDeck} from '../utils/api'

class DeckListView extends Component {
  componentDidMount = () => {
    //clearAll()
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
            <TouchableOpacity style={styles.deck} onPress={() => this.props.navigation.navigate('DeckView', {deckName: item.title})}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.cards}>
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
  title: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 30,
    padding: 2,
    margin: 1
  },
  cards: {
    color: '#666666',
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 5,
    margin: 1
  },
  deck: {
    backgroundColor: '#eeeeee',
    flex: 1,
    justifyContent: 'space-around',
    margin: 2,
    padding: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#aaaaaa',
  },
})