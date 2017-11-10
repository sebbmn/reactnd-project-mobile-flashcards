import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckListView from './components/DeckListView'
import AddCardView from './components/AddCardView'
import AddDeckView from './components/AddDeckView'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import QuizResult from './components/QuizResult'
import configureStore from './store/configureStore';
import { setLocalNotification } from './utils/helpers'

const MainTabNavigator = TabNavigator({
  Home: {
    screen: DeckListView,
  },
  NewDeck: { 
    screen: AddDeckView,
  },
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor: '#444444',
    style: {
      backgroundColor: '#ffffff',
    }
  }
})
const AppNavigator = StackNavigator({
  Home: { 
    screen: MainTabNavigator,
  },
  AddDeckView: { 
    screen: AddDeckView,    
  },
  AddCardView: { 
    screen: AddCardView, 
  },
  DeckView: { 
    screen: DeckView ,
  },
  QuizView: { 
    screen: QuizView 
  },
  QuizResult: {
    screen: QuizResult
  }
},
{
  navigationOptions: {
    title: 'Mobile Flaashcards',
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff'
  }
})

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