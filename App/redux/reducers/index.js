import {combineReducers} from 'redux';

import auth from './auth';
import country from './country';
import message from './message';
import profile from './profile';

export default combineReducers({
  auth,
  country,
  message,
  profile,
});
