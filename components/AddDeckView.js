import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

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
      <View>
        <Text style={{fontSize:30, margin:20}}>
          What is the title of your new deck?
        </Text>
        <TextInput
          value={this.state.deckTitle}
          onChangeText={(text) => this.setState({deckTitle:text})}
        />
        <Button
          onPress={this.submit}
          title="Submit"
          color="#000000"
        />
      </View>
    )
  }
}