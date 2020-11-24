import http from '../../helpers/http';
import qs from 'qs';

export default {
  postMessage: (token, recipientId, data) => ({
    type: 'POST_MESSAGE',
    payload: http(token).post(
      `message/chat/${recipientId}`,
      qs.stringify(data),
    ),
  }),
  getMessage: (token, recipientId, page, limit) => ({
    type: 'GET_MESSAGE',
    payload: http(token).get(`message/list/${recipientId}`),
  }),
  getMessageList: (token, page, limit) => ({
    type: 'GET_MESSAGE_LIST',
    payload: http(token).get('message/list'),
  }),
};
