import React, { Component } from 'react'
import { Text, View } from 'react-native'
import QuizView from './QuizView'
import AddCardView from './AddCardView'

export default class DeckView extends Component {
  render() {
    return (
      <View>
        <Text>
          DeckView
        </Text>
        <QuizView/>
        <AddCardView/>
      </View>
    )
  }
}