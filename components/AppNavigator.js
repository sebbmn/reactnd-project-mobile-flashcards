import { StackNavigator } from 'react-navigation'
import MainTabNavigator from '../components/MainTabNavigator'
import AddCardView from '../components/AddCardView'
import AddDeckView from '../components/AddDeckView'
import DeckListView from '../components/DeckListView'
import DeckView from '../components/DeckView'
import QuizResult from '../components/QuizResult'
import QuizView from '../components/QuizView'

export default AppNavigator = StackNavigator({
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