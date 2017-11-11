import React from 'react'
import { Provider } from 'react-redux'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { setLocalNotification } from './utils/helpers'
import { clearAll } from './utils/api'
import AddCardView from './components/AddCardView'
import AddDeckView from './components/AddDeckView'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import QuizResult from './components/QuizResult'
import QuizView from './components/QuizView'
import configureStore from './store/configureStore';

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
    title: 'Mobile Flashcards',
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTintColor: '#ffffff'
  }
})

const store = configureStore()

export default class App extends React.Component {
  componentDidMount() {
    //clearAll()
    //setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )
  }
}