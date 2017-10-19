import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class DeckListView extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('DeckView', {deckName: 'test'})}
          title="Deck"
        />
      </View>
    )
  }
}