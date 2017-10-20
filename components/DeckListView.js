import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, StyleSheet, SectionList } from 'react-native'

export default class DeckListView extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {deckName: 'New Deck I', deckId:'12345'})}>
          <Text style={styles.button}>New Deck I</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
    margin: 10
  },
})