import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

class DeckListView extends Component {
  state = {
    decks: [
      {
        title: 'React',
      },
      {
        title:'Javascript'
      },
      {
        title: 'Blavla'
      }
    ]
  }
  render() {
    const {deckList} = this.props
    return (
      <View>
        <FlatList
        data={this.state.decks}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {deckName: item.title, deckId:'12345'})}>
            <Text style={styles.button}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Text>{deckList.React.title}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0000aa',
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
    margin: 10
  },
})
function mapStateToProps (state) {
  return {deckList: state}
}
export default connect(
  mapStateToProps
)(DeckListView)