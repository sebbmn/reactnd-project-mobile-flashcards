import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCardToStorage } from '../../actions'
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

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
    if(this.state.inputQuestion === ''){
      alert('Your card need a question')
    } else if (this.state.inputAnswer === '') {
      alert('Your card need an answer')
    } else {
      this.props.addC({deckName:this.props.navigation.state.params.deckName, question:this.state.inputQuestion, answer:this.state.inputAnswer})
      this.props.navigation.navigate('DeckView', {deckName: this.props.navigation.state.params.deckName})
    }
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
function mapDispatchToProps (dispatch) {
  return { 
    addC: (data) => dispatch(addCardToStorage(data))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(AddCardView)

