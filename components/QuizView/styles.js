import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 10,
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