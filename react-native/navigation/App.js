import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Contact from './Contact';
import About from './About';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import {FontAwesome, EvilIcons, MaterialIcons} from '@expo/vector-icons';
const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Contact: {
    screen: Contact
  }
},{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'grey',
  },
  navigationOptions: ({navigation})=> ({
    tabBarIcon: ({focused, tintColor})=> {
      const {routeName} = navigation.state;
      if(routeName === 'Home') {
        return <FontAwesome name="home" size={25} color={tintColor} />
      }
      if(routeName === 'About') {
        return <EvilIcons name="question" size={25} color={tintColor} />
      }
      if(routeName === 'Contact') {
        return <MaterialIcons name="contacts" size={25} color={tintColor} />
      }
    },
    title: 'Navigation App',
    headerStyle: {
      backgroundColor: 'lightblue'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: 'black'
    }
  })
});

// export default AppNavigator;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
