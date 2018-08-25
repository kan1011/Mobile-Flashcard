import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import DeckListing from './components/DeckListing'
import NewDeckPage from './components/NewDeckPage'
import DeckDetail from './components/DeckDetail'
import NewCardPage from './components/NewCardPage'
import QuizPage from './components/QuizPage'
import { initialDecks, getDecks, checkDecks } from './helpers/accessStorage'
import { setNotification } from './helpers/notification'

const Tabs = createBottomTabNavigator({
  Decks:{
    screen: DeckListing,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' size={30} color={tintColor} />,
    }
  },
  AddDeck:{
    screen: NewDeckPage,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-contact' size={30} color={tintColor} />,    
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: "#636363",
    inactiveTintColor: '#b2b2b2',
    style: {
      height: 56,
      backgroundColor: "#f9f9f9",
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions:{
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ea8a31'
      }
    }
  },
  AddCard: {
    screen: NewCardPage,
    navigationOptions:{
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ea8a31'
      }
    }
  },
  QuizPage: {
    screen: QuizPage,
    navigationOptions:{
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ea8a31'
      }
    }
  }
})

export default class App extends React.Component {
  componentDidMount = () => {
    // initialDecks()
    setNotification()
  }

  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.isFocused !== this.props.isFocused) {
  //       console.log('updated')
  //   }
  // }

  render() {
    return (
      <View style={styles.main}>
        <MainNavigator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: '#b2b2b2',
    // flexDirection: 'row',
    flex: 1,
    // alignItems: 'center',
  }
})