import React from 'react'
import { Provider } from 'react-redux'
import { setLocalNotification } from './utils/helpers'
import { clearAll } from './utils/api'
import configureStore from './store/configureStore'
import MainTabNavigator from './components/MainTabNavigator'
import AppNavigator from './components/AppNavigator'


const store = configureStore()

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )
  }
}