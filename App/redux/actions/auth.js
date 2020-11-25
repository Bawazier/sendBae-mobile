import http from '../../helpers/http';
import qs from 'qs';

export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post('auth/', qs.stringify(data)),
  }),

  signUp: () => ({
    type: 'SIGNUP',
  }),

  logout: () => ({
    type: 'LOGOUT',
  }),
};
