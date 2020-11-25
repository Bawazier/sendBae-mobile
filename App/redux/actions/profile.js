import http from '../../helpers/http';
import qs from 'qs';

export default {
  getProfile: (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('profile/'),
  }),
  patchProfile: (token, data) => ({
    type: 'PATCH_PROFILE',
    payload: http(token).patch('profile/', qs.stringify(data)),
  }),
  putPhoneNumber: (token, data) => ({
    type: 'PUT_PROFILE',
    payload: http(token).put('profile/', qs.stringify(data)),
  }),
};
