import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deckName,
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff',
    headerLeft: <Button title='Home' color={'#000000'} onPress={() => navigation.navigate('Home')}/>
  })
  render() {
    const { deckList } = this.props
    const { params } = this.props.navigation.state

    return (
      <View style={styles.container}>
          <View>     
            <Text style={styles.title}>
              {deckList[params.deckName] && (deckList[params.deckName].questions.length > 1 ? 
                `${deckList[params.deckName].questions.length} cards in ${params.deckName}`
              :
                `${deckList[params.deckName].questions.length} card in ${params.deckName}`
              )}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCardView', {deckName: params.deckName})}>
              <Text style={styles.buttonAdd}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('QuizView', {deckName: params.deckName})}>
              <Text style={styles.buttonQuiz}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}
function mapStateToProps (state) {
  return {
    deckList: state
  }
}
export default connect(
  mapStateToProps,
)(DeckView)