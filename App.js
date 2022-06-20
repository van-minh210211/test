import * as React from 'react';
import {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './screen/Login';
import sinup from './screen/sinup';
import main from './screen/Main';
const Stack = createStackNavigator ();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName = "login">
        <Stack.Screen name = "login" component = {login}/>
        <Stack.Screen name = "sinup" component = {sinup}/>
        <Stack.Screen name = "Main" component = {main}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}


