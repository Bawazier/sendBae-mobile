import {createStore, applyMiddleware, compose} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import {persistReducer} from 'redux-persist';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persitedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persitedReducer,
  compose(applyMiddleware(promiseMiddleware, logger)),
);

export default store;
