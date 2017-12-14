import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 30,
  },
  title: {
    fontSize: 40,
    textAlign: 'center'
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 5,
  },
  buttonCorrect: {
    backgroundColor: '#ffffff',
    color: '#000000',
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
    backgroundColor: '#000000',
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
  buttonHome: {
    backgroundColor: '#005500',
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