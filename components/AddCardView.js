import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class AddCardView extends Component {
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
    // TODO instead of alert, add question to the store/storage
    alert(`Question: ${this.state.inputQuestion} Answer: ${this.state.inputAnswer}`)
    this.setState({deckTitle:''})
    this.props.navigation.navigate('Home')
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