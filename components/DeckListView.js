import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

export default class DeckListView extends Component {
  state = {
    decks: [
      {
        title: 'React',
      },
      {
        title:'Javascript'
      },
      {
        title: 'Blavla'
      }
    ]
  }
  render() {
    return (
      <View>
        <FlatList
        data={this.state.decks}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {deckName: item.title, deckId:'12345'})}>
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
    backgroundColor: '#abc678',
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
    margin: 10
  },
})