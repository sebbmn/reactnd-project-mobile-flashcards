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
    headerTintColor: '#ffffff'
  })

  render() {
    const { params } = this.props.navigation.state

    return (
      <View style={styles.container}>
          <View>     
            <Text style={styles.title}>
              {params.deckName} cards
            </Text>
            <Text style={styles.number}>
              {params.deckId}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCardView')}>
              <Text style={styles.buttonAdd}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('QuizView')}>
              <Text style={styles.buttonQuiz}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 60,
  },
  title: {
    fontSize: 35,
    textAlign: 'center'
  },
  number: {
    textAlign: 'center'
  },
  buttonQuiz: {
    backgroundColor: '#000000',
    color: '#ffffff',
    justifyContent:'center',
    height: 50,
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 5
  },
  buttonAdd: {
    backgroundColor: '#ffffff',
    color: '#000000',
    height: 50,
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 5
  }
})