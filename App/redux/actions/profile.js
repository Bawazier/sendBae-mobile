import http from '../../helpers/http';
import qs from 'qs';

export default {
  getProfile: (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('profile/'),
  }),
  getProfileId: (token, id) => ({
    type: 'GET_PROFILE_ID',
    payload: http(token).get(`profile/info/${id}`),
  }),
  patchProfile: (token, data) => ({
    type: 'PATCH_PROFILE',
    payload: http(token).patch('profile/', qs.stringify(data)),
  }),
  patchProfileImage: (token, data) => ({
    type: 'PATCH_PROFILE',
    payload: http(token).patch('profile/', data),
  }),
  putPhoneNumber: (token, data) => ({
    type: 'PUT_PROFILE',
    payload: http(token).put('profile/', qs.stringify(data)),
  }),
};
