import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class QuizView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz '+navigation.state.params.deckName,
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff'
  })
  state= {
    index: 0,
    correctAnswers: 0,
    displayAnswer: false,
    displayResult: false
  }
  setMode = () => {
    this.setState({displayAnswer:!this.state.displayAnswer})
  }
  validateQuestion = (answer) => {
    this.setState({displayAnswer: false}, () => {
      if(answer === 'correct') {
        this.setState({correctAnswers: this.state.correctAnswers+1}, () => {
          if(this.state.index < this.props.deckList[this.props.navigation.state.params.deckName].questions.length-1) {
            this.setState({index: this.state.index+1})
          } else {
            this.props.navigation.navigate('QuizResult',{correctAnswers:this.state.correctAnswers, questions:this.props.deckList[this.props.navigation.state.params.deckName].questions.length})
          }
        })
      } else {
        if(this.state.index < this.props.deckList[this.props.navigation.state.params.deckName].questions.length-1) {
          this.setState({index: this.state.index+1})
        } else {
          this.props.navigation.navigate('QuizResult',{correctAnswers:this.state.correctAnswers, questions:this.props.deckList[this.props.navigation.state.params.deckName].questions.length})
        }
      }
    })
  }
  render() {
    const { params } = this.props.navigation.state
    const { deckList } = this.props

    questions = deckList[params.deckName] && deckList[params.deckName].questions

    return (
      <View style={styles.container}>
        <Text>{this.state.index+1}/{questions && questions.length}</Text>
        <TouchableOpacity onPress={this.setMode}>
          {this.state.displayAnswer ? (
              <View>
                <Text style={styles.title}>
                  {questions && questions[this.state.index].answer}
                </Text>
                <Text style={{color: 'red', alignSelf: 'center'}}>Question</Text>
              </View>
            ):(
              <View>
                <Text style={styles.title}>
                  {questions[this.state.index] && questions[this.state.index].question}
                </Text>
                <Text style={{color: 'red', alignSelf: 'center'}}>Answer</Text>
              </View>
            )
          }
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => this.validateQuestion('correct')}>
            <Text style={styles.buttonCorrect}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.validateQuestion('incorrect')}>
            <Text style={styles.buttonIncorrect}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  buttonCorrect: {
    backgroundColor: '#44bb44',
    color: '#ffffff',
    alignSelf:'center',
    width: 200,
    height: 50,
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'center',
    padding: 12,
    margin: 5
  },
  buttonIncorrect: {
    backgroundColor: '#bb4444',
    color: '#ffffff',
    alignSelf:'center',
    width: 200,
    height: 50,
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'center',
    padding: 12,
    margin: 5
  },
})
function mapStateToProps (state) {
  return {
    deckList: state
  }
}
export default connect(
  mapStateToProps
)(QuizView)