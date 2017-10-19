import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckListView from './components/DeckListView'
import AddCardView from './components/AddCardView'
import AddDeckView from './components/AddDeckView'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'

const MainTabNavigator = TabNavigator({
  Home: { screen: DeckListView },
  NewDeck: { screen: AddDeckView },
})
const AppNavigator = StackNavigator({
  Home: { screen: MainTabNavigator },
  AddDeckView: { screen: AddDeckView },
  AddCardView: { screen: AddCardView },
  DeckView: { screen: DeckView },
  QuizView: { screen: QuizView },
})

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    )
  }
}

