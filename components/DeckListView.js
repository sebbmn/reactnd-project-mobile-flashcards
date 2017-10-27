import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

class DeckListView extends Component {
  render() {
    const {deckList} = this.props
    let decks = Object.keys(deckList).map(e=>({title: e}))

    return (
      <View>
        <FlatList
        data={decks}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {deckName: item.title})}>
            <Text style={styles.button}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
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
  return {
    deckList: state
  }
}
export default connect(
  mapStateToProps
)(DeckListView)