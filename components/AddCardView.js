import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class AddCardView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card',
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff'
  })
  render() {
    return (
      <View>
        <Text>
          AddCardView
        </Text>
      </View>
    )
  }
}