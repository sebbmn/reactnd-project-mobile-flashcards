import { TabNavigator } from 'react-navigation'
import AddDeckView from '../components/AddDeckView'
import DeckListView from '../components/DeckListView'

export default MainTabNavigator = TabNavigator({
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