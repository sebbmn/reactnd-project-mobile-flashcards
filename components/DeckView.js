import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { TabNavigator } from 'react-navigation'
import QuizView from './QuizView'
import AddCardView from './AddCardView'

const DeckTabNavigator = TabNavigator({
  Quiz: { screen: QuizView },
  NewCard: { screen: AddCardView },
})

export default class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Deck name: ${navigation.state.params.deckName}`,
  })

  render() {
    const { params } = this.props.navigation.state

    return (
      <View>
        <Text>
          {params.deckName}
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('QuizView')}
          title="Start Quiz"
        />
        <Button
          onPress={() => this.props.navigation.navigate('AddCardView')}
          title="Add Card"
        />
      </View>
    )
  }
}