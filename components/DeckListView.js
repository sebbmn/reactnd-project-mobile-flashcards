import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { Text, View, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import {saveDeckTitle, getDecks, clearAll, getDeck} from '../utils/api'

class DeckListView extends Component {
  componentDidMount = () => {
    getDeck('Test').then((result) => {
      //console.log(result.title)
      //this.props.addD(result)
    })
    getDecks().then( (results) => {
      results.map( (result) => {
        this.props.addD(result)
      })
    })
  }
  
  render() {

    //saveDeckTitle('React')
    //saveDeckTitle('JavaScript')
    //saveDeckTitle('Test1')
    //saveDeckTitle('Test2')
    //clearAll()
    //getDecks('gg')
    //getDeck('Test')


    const {deckList} = this.props
    let decks = Object.keys(deckList).map(e=>({title: e}))

    return (
      <View>
        <FlatList
        data={decks}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {deckName: item.title})}>
            <Text style={styles.button}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0000aa',
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
    margin: 10
  },
})
function mapStateToProps (state) {
  return {
    deckList: state
  }
}
function mapDispatchToProps (dispatch) {
  return { 
    addD: (data) => dispatch(addDeck(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckListView)