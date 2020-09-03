// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './containers/home';
import Login from './containers/login';
import Bootscreen from './containers/bootscreen';
import Chatgroup from './components/chat/chatgroup';
import Roomchat from './components/chat/roomchat';
import Chatfriends from './components/chat/chatfriends';
import Roomchatfriend from './components/chat/roomchatfriend'
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bootscreen" component={Bootscreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown:false }}/>
        <Stack.Screen name="Chatgroup" component={Chatgroup} options={{ headerShown:false }}/>
        <Stack.Screen name="Roomchat" component={Roomchat} options={{ headerShown:false }}/>
        <Stack.Screen name="Chatfriends" component={Chatfriends} options={{ headerShown:false }}/>
        <Stack.Screen name="Roomchatfriend" component={Roomchatfriend} options={{ headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;