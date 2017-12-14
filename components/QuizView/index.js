import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'

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
    displayResult: false,
    isEmpty: true
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
            this.props.navigation.navigate('QuizResult',{
              deckName: this.props.navigation.state.params.deckName,
              correctAnswers:this.state.correctAnswers, 
              questions:this.props.deckList[this.props.navigation.state.params.deckName].questions.length
            })
          }
        })
      } else {
        if(this.state.index < this.props.deckList[this.props.navigation.state.params.deckName].questions.length-1) {
          this.setState({index: this.state.index+1})
        } else {
          this.props.navigation.navigate('QuizResult',{
            deckName: this.props.navigation.state.params.deckName,
            correctAnswers:this.state.correctAnswers, 
            questions:this.props.deckList[this.props.navigation.state.params.deckName].questions.length
          })
        }
      }
    })
  }
  render() {
    const { params } = this.props.navigation.state
    const { deckList } = this.props

    let questions = deckList[params.deckName] && deckList[params.deckName].questions

    return (
      <View style={styles.container}>
        <Text>{this.state.index+1}/{questions && questions.length}</Text>
        {questions.length > 0 ? (
          <View>
            <TouchableOpacity onPress={this.setMode}>
              {this.state.displayAnswer ? (
                  <View style={{marginBottom: 80}}>
                    <Text style={styles.title}>
                      {questions[this.state.index] && questions[this.state.index].answer}
                    </Text>
                    <Text style={{color: 'red', alignSelf: 'center', padding:5}}>Back to question</Text>
                  </View>
                ):(
                  <View style={{marginBottom: 80}}>
                    <Text style={styles.title}>
                      {questions[this.state.index] && questions[this.state.index].question}
                    </Text>
                    <Text style={{color: 'red', alignSelf: 'center', padding:5}}>Show answer</Text>
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
          ) : (
            <Text style={styles.title}>Please add question to this deck</Text>
          )
        }
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
  mapStateToProps
)(QuizView)