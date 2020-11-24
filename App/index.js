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
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';

import {MainContainer} from './styles';

import Screens from './navigations';

const App = () => {
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
};

export default App;
