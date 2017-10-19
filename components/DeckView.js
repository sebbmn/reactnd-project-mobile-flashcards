import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { TabNavigator } from 'react-navigation'
import QuizView from './QuizView'
import AddCardView from './AddCardView'

export default class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deckName,
    headerStyle: {
      backgroundColor: '#000000'
    },
  })

  render() {
    const { params } = this.props.navigation.state

    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>
            {params.deckName}
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('QuizView')}>
            <Text style={styles.button}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCardView')}>
            <Text style={styles.button}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 40,
  },
  innerContainer: {
    margin: 40,
  },
  button: {
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
    margin: 10
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
})