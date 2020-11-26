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
  getMessage: (token, recipientId, search = '', page = 0, limit = 10) => ({
    type: 'GET_MESSAGE',
    payload: http(token).get(
      `message/list/${recipientId}/?search=${search}&page=${page}&limit=${limit}`,
    ),
  }),
  getMessageList: (token, search = '', page = 0, limit = 10) => ({
    type: 'GET_MESSAGE_LIST',
    payload: http(token).get(
      `message/list/?search=${search}&page=${page}&limit=${limit}`,
    ),
  }),
  getRecipiendId: (id) => ({
    type: 'GET_RECIPIENT_ID',
    payload: id,
  }),
};
