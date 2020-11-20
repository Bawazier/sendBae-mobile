/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {MainContainer} from './styles';

import Main from './screens/Main';
import Login from './screens/Login';
import Contacts from './screens/Contacts';
import ChatList from './screens/ChatList';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import ChatRoom from './screens/ChatRoom';

import Screens from './navigations';

const App = () => {
  return (
    <MainContainer>
      <Screens />
    </MainContainer>
  );
};

export default App;
