/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import SplashScreen from 'react-native-splash-screen';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';

import {MainContainer} from './styles';

import Screens from './navigations';

class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    const persitedStore = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persitedStore}>
          <MainContainer>
            <Screens />
          </MainContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
