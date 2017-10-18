import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DeckView from './DeckView'
import AddDeckView from './AddDeckView'
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  Deck_View: {
    screen: DeckView
  },
  Add_deck: {
    screen: AddDeckView
  },
})

export default class DeckListView extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Tabs />
        <Text>ahhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
      </View>
    )
  }
}