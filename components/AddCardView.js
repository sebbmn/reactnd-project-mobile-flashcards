import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCardToStorage } from '../actions'
import { Text, View, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

class AddCardView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card',
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff'
  })
  state = {
    inputQuestion: '',
    inputAnswer: ''
  }
  submit = () => {
    this.props.addC({deckName:this.props.navigation.state.params.deckName, question:this.state.inputQuestion, answer:this.state.inputAnswer})
    this.props.navigation.navigate('DeckView', {deckName: this.props.navigation.state.params.deckName})
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.title}>
          Question
        </Text>
        <TextInput
          value={this.state.inputQuestion}
          onChangeText={(text) => this.setState({inputQuestion:text})}
          style={styles.textinput}
        />
        <Text style={styles.title}>
          Answer
        </Text>
        <TextInput
          value={this.state.inputAnswer}
          onChangeText={(text) => this.setState({inputAnswer:text})}
          style={styles.textinput}
        />
        <TouchableOpacity onPress={this.submit}>
          <Text style={styles.buttonSubmit}>Submit</Text>
        </TouchableOpacity>
        <View>
        </View>
      </KeyboardAvoidingView>
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
    fontSize: 25,
    textAlign: 'center'
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 5,
  },
  buttonSubmit: {
    backgroundColor: '#000000',
    color: '#ffffff',
    alignSelf:'center',
    width: 150,
    height: 50,
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 5
  },
})
function mapDispatchToProps (dispatch) {
  return { 
    addC: (data) => dispatch(addCardToStorage(data))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(AddCardView)