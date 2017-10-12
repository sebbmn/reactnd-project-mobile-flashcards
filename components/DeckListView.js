import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DeckView from './DeckView'
import AddDeckView from './AddDeckView'

export default class DeckListView extends Component {
  render() {
    return (
      <View>
        <Text>
          DeckListView
        </Text>
        <DeckView/>
        <AddDeckView/>
      </View>
    )
  }
}