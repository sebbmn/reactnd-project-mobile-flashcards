import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
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