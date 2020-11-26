import http from '../../helpers/http';
import qs from 'qs';

export default {
  getContact: (token) => ({
    type: 'GET_CONTACT',
    payload: http(token).get('contact/'),
  }),
  getContactId: (token, id) => ({
    type: 'GET_CONTACT_ID',
    payload: http(token).get(`contact/${id}`),
  }),
  postContact: (token, data) => ({
    type: 'POST_CONTACT',
    payload: http(token).post('contact/', qs.stringify(data)),
  }),
  patchContact: (token, id, data) => ({
    type: 'PATCH_CONTACT',
    payload: http(token).patch(`contact/${id}`, qs.stringify(data)),
  }),
};
