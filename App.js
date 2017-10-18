import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DeckListView from './components/DeckListView'
import { StackNavigator } from 'react-navigation'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'

const Stack = StackNavigator({
  DeckView: {
    screen: DeckView
  },
  QuizView: {
    screen: QuizView
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Project Mobile Flashcards</Text>
        <DeckListView/>
        <TouchableOpacity>
          <Text>Press here for the Dashboard</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
