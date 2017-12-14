import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { clearLocalNotification } from '../../utils//helpers'
import styles from './styles'

export default class QuizResult extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Results',
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff'
  })
  componentDidMount = () => {
    clearLocalNotification()
  }
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
            <Text style={styles.buttonHome}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}