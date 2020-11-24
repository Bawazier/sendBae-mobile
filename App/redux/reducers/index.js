import {combineReducers} from 'redux';

import auth from './auth';
import country from './country';

export default combineReducers({
  auth,
  country,
});
