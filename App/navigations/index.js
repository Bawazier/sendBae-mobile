import React from 'react';

import Main from '../screens/Main';
import Login from '../screens/Login';
import ChatList from '../screens/ChatList';
import ChatRoom from '../screens/ChatRoom';
import Settings from '../screens/Settings';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator
      sceneContainerStyle={{backgroundColor: '#2E4392'}}
      headerMode="screen">
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const Navigations = () => {
  return (
    <NavigationContainer>
      {true ? (
        <AuthStack />
      ) : (
        <Drawer.Navigator
          initialRouteName="Home"
          sceneContainerStyle={{backgroundColor: '#E6E9EF'}}>
          <Drawer.Screen
            name="Home"
            component={ChatStack}
            headerMode="screen"
          />
          <Drawer.Screen name="Contacts" component={Contacts} />
          <Drawer.Screen name="Settings" component={SettingStack} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigations;
