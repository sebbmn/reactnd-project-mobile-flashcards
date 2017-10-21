import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default class AddDeckView extends Component {
  state = {
    deckTitle: ''
  }
  submit = () => {
    // TODO instead of alert, add deck to the store/storage
    alert(this.state.deckTitle)
    this.setState({deckTitle:''})
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
          <TextInput
            value={this.state.deckTitle}
            onChangeText={(text) => this.setState({deckTitle:text})}
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
    fontSize: 35,
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