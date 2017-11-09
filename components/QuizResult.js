import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class QuizResult extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Results',
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff'
  })
  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Results: {`${params.correctAnswers}/${params.questions}`}
        </Text>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('QuizView', {deckName: params.deckName})}>
            <Text style={styles.buttonCorrect}>Retry?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {deckName: params.deckName})}>
            <Text style={styles.buttonIncorrect}>Back to deck</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonIncorrect}>Home</Text>
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
    margin: 30,
  },
  title: {
    fontSize: 40,
    textAlign: 'center'
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 5,
  },
  buttonCorrect: {
    backgroundColor: '#ffffff',
    color: '#000000',
    alignSelf:'center',
    width: 200,
    height: 50,
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'center',
    padding: 12,
    margin: 5
  },
  buttonIncorrect: {
    backgroundColor: '#000000',
    color: '#ffffff',
    alignSelf:'center',
    width: 200,
    height: 50,
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'center',
    padding: 12,
    margin: 5
  },
})