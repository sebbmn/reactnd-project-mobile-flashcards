import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

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