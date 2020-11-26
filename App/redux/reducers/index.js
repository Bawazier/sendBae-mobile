import {combineReducers} from 'redux';

import auth from './Auth/auth';

import dataCountry from './Country/dataCountry';
import dataIdCountry from './Country/dataIdCountry';

import message from './Message/message';
import chatMessage from './Message/chatMessage';
import listMessage from './Message/listMessage';

import profile from './Profile/profile';
import dataProfile from './Profile/dataProfile';
import dataIdProfile from './Profile/dataIdProfile';

import contact from './Contact/contact';
import dataContact from './Contact/dataContact';
import dataIdContact from './Contact/dataIdContact';

export default combineReducers({
  auth,

  dataCountry,
  dataIdCountry,

  message,
  chatMessage,
  listMessage,

  profile,
  dataProfile,
  dataIdProfile,

  contact,
  dataContact,
  dataIdContact,
});
