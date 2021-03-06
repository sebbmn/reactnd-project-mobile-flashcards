import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDeckToStorage } from '../../actions'
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

class AddDeckView extends Component {
  state = {
    deckTitle: ''
  }
  submit = () => {
    if(this.state.deckTitle !== '') {
      if(this.props.deckList[this.state.deckTitle]) {
        alert('This deck name already exist, please choose another name for your deck')
      } else {
        this.props.addD(this.state.deckTitle)
        this.props.navigation.navigate('DeckView', {deckName: this.state.deckTitle})
        this.setState({deckTitle:''})
      }
    } else {
      alert('Your deck need a name')
    }
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
function mapStateToProps (deckList) {
  return { deckList }
}
function mapDispatchToProps (dispatch) {
  return { 
    addD: (data) => dispatch(addDeckToStorage(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeckView)

