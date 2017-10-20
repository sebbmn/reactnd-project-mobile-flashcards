import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class QuizView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz',
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff'
  })
  render() {
    return (
      <View>
        <Text>
          QuizView
        </Text>
      </View>
    )
  }
}