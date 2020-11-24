import {combineReducers} from 'redux';

import auth from './auth';
import country from './country';
import message from './message';

export default combineReducers({
  auth,
  country,
  message,
});
